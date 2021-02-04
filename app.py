import os
from flask import (
    Flask, flash, render_template,
    redirect, request, session, url_for)
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from werkzeug.security import generate_password_hash, check_password_hash
if os.path.exists("env.py"):
    import env

app = Flask(__name__)

app.config["MONGO_DBNAME"] = os.environ.get("MONGO_DBNAME")
app.config["MONGO_URI"] = os.environ.get("MONGO_URI")
app.secret_key = os.environ.get("SECRET_KEY")

mongo = PyMongo(app)


@app.route("/")
@app.route("/get_videos")
def get_videos():
    videos = list(mongo.db.videos.find())
    return render_template("videos.html", videos=videos)


@app.route("/search", methods=["GET", "POST"])
def search():
    search = request.form.get("search")
    videos = list(mongo.db.videos.find({"$text": {"$search": search}}))
    return render_template("videos.html", videos=videos)


@app.route("/signup", methods=["GET", "POST"])
def signup():
    videos = list(mongo.db.videos.find())
    if request.method == "POST":
        # check if username already exists in db
        existing_user = mongo.db.users.find_one(
            {"username": request.form.get("username").lower()})

        if existing_user:
            flash("Username already exists")
            return redirect(url_for("signup"))

        signup = {
            "username": request.form.get("username").lower(),
            "password": generate_password_hash(request.form.get("password"))
        }
        mongo.db.users.insert_one(signup)

        # put the new user into 'session' cookie
        session["user"] = request.form.get("username").lower()
        flash("Sign up Successful!")
        return redirect(url_for("profile", username=session["user"]))

    return render_template("signup.html", videos=videos)


@app.route("/login", methods=["GET", "POST"])
def login():
    videos = list(mongo.db.videos.find())
    if request.method == "POST":
        # check of username exists in db
        existing_user = mongo.db.users.find_one(
            {"username": request.form.get("username").lower()})

        if existing_user:
            # check hashed password matches user input
            if check_password_hash(
               existing_user["password"], request.form.get("password")):
                session["user"] = request.form.get("username").lower()
                flash("Hello, {}".format(request.form.get("username")))
                return redirect(url_for(
                    "profile", username=session["user"]))
            else:
                # invalid password match
                flash("Incorrect Username and/or Password")
                return redirect(url_for("login"))

        else:
            # username doesn't exist
            flash("Incorrect Username and/or Password")
            return redirect(url_for("login"))

    return render_template("login.html", videos=videos)


@app.route("/profile/<username>", methods=["GET", "POST"])
def profile(username):
    # grab the session user's username from db
    username = mongo.db.users.find_one(
        {"username": session["user"]})["username"]

    videos = list(mongo.db.videos.find())

    # create a new list of videos unique to user
    my_videos = []
    for video in videos:
        if video["added_by"] == username:
            my_videos.append(video)

    if session["user"]:
        return render_template("profile.html",
                               username=username, my_videos=my_videos)

    return redirect(url_for("login"))


@app.route("/logout")
def logout():
    # remove user from session cookie
    flash("You have been logged out")
    session.pop("user")
    return redirect(url_for("login"))


@app.route("/add_video", methods=["GET", "POST"])
def add_video():
    # grab the session user's username from db
    username = mongo.db.users.find_one(
            {"username": session["user"]})["username"]

    videos = list(mongo.db.videos.find())

    # create a new list of videos unique to user
    my_videos = []
    for video in videos:
        if video["added_by"] == username:
            my_videos.append(video)

    if request.method == "POST":
        embed_url = request.form.get("video_embed_url"
                                     ).split("\"")[1].split("\"")[0]
        video = {
            "category_name": request.form.get("category_name"),
            "video_name": request.form.get("video_name"),
            "video_description": request.form.get("video_description"),
            "video_embed_url": embed_url,
            "created_by": request.form.get("created_by"),
            "sound_by": request.form.get("sound_by"),
            "tags": request.form.get("tags"),
            "added_by": session["user"]
        }
        mongo.db.videos.insert_one(video)
        flash("Video Successfully Added")

        # create a new list of videos unique to user
        my_videos = []
        for video in videos:
            if video["added_by"] == username:
                my_videos.append(video)

        if session["user"]:
            return render_template("profile.html",
                                   username=username, my_videos=my_videos)

    categories = mongo.db.categories.find().sort("category_name", 1)
    return render_template("add_video.html",
                           categories=categories, videos=videos, username=username, my_videos=my_videos)


@app.route("/edit_video/<video_id>", methods=["GET", "POST"])
def edit_video(video_id):

    # grab the session user's username from db
    username = mongo.db.users.find_one(
            {"username": session["user"]})["username"]

    videos = list(mongo.db.videos.find())

    # create a new list of videos unique to user
    my_videos = []
    for video in videos:
        if video["added_by"] == username:
            my_videos.append(video)

    if request.method == "POST":
        submit = {
            "category_name": request.form.get("category_name"),
            "video_name": request.form.get("video_name"),
            "video_description": request.form.get("video_description"),
            "video_embed_url": request.form.get("video_embed_url"),
            "created_by": request.form.get("created_by"),
            "sound_by": request.form.get("sound_by"),
            "tags": request.form.get("tags"),
            "added_by": session["user"]
        }
        mongo.db.videos.update({"_id": ObjectId(video_id)}, submit)
        flash("Video Successfully Updated")
        # grab the session user's username from db
        username = mongo.db.users.find_one(
            {"username": session["user"]})["username"]

        videos = list(mongo.db.videos.find())

        # create a new list of videos unique to user
        my_videos = []
        for video in videos:
            if video["added_by"] == username:
                my_videos.append(video)

        if session["user"]:
            return render_template("profile.html",
                                   username=username, my_videos=my_videos)

    video = mongo.db.videos.find_one({"_id": ObjectId(video_id)})
    categories = mongo.db.categories.find().sort("category_name", 1)
    return render_template("edit_video.html",
                           video=video, categories=categories,
                           username=username, my_videos=my_videos)


@app.route("/delete_video/<video_id>")
def delete_video(video_id):
    mongo.db.videos.remove({"_id": ObjectId(video_id)})
    flash("Video Successfully Deleted")
    # grab the session user's username from db
    username = mongo.db.users.find_one(
        {"username": session["user"]})["username"]

    videos = list(mongo.db.videos.find())

    # create a new list of videos unique to user
    my_videos = []
    for video in videos:
        if video["added_by"] == username:
            my_videos.append(video)

    if session["user"]:
        return render_template("profile.html",
                               username=username, my_videos=my_videos)


@app.route("/get_categories")
def get_categories():
    videos = list(mongo.db.videos.find())
    categories = list(mongo.db.categories.find().sort("category_name", 1))
    return render_template("categories.html",
                           categories=categories, videos=videos)


@app.route("/add_category", methods=["GET", "POST"])
def add_category():
    videos = list(mongo.db.videos.find())
    categories = list(mongo.db.categories.find().sort("category_name", 1))
    if request.method == "POST":
        for category in categories:
            # check if category already exists in db
            current_name = category["category_name"].lower()
            if current_name == request.form.get("c_name").lower():
                flash("Category already exists")
                return redirect(url_for("add_category"))

        category = {
            "category_name": request.form.get("c_name")
        }
        mongo.db.categories.insert_one(category)
        flash("New Category Added")
        return redirect(url_for("get_categories"))

    return render_template("add_category.html",
                           categories=categories, videos=videos)


@app.route("/edit_category/<category_id>", methods=["GET", "POST"])
def edit_category(category_id):
    videos = list(mongo.db.videos.find())
    categories = list(mongo.db.categories.find().sort("category_name", 1))
    if request.method == "POST":
        for category in categories:
            # check if category already exists in db
            current_name = category["category_name"].lower()
            if current_name == request.form.get("c_name").lower():
                flash("Category already exists")
                return redirect(url_for('edit_category',
                                category_id=category["_id"]))

        submit = {
            "category_name": request.form.get("c_name")
        }
        mongo.db.categories.update({"_id": ObjectId(category_id)}, submit)
        flash("Category Successfully Updated")
        return redirect(url_for("get_categories"))

    category = mongo.db.categories.find_one({"_id": ObjectId(category_id)})
    return render_template("edit_category.html",
                           categories=categories, category=category,
                           videos=videos)


@app.route("/delete_category/<category_id>")
def delete_category(category_id):
    mongo.db.categories.remove({"_id": ObjectId(category_id)})
    flash("Category Successfully Deleted")
    return redirect(url_for("get_categories"))


@app.route("/open_category/<category_name>")
def open_category(category_name):
    videos = list(mongo.db.videos.find())

    # create a new list of videos unique to user
    category_videos = []
    for video in videos:
        if video["category_name"] == category_name:
            category_videos.append(video)

    return render_template("open_category.html",
                           category_videos=category_videos)


if __name__ == "__main__":
    app.run(host=os.environ.get("IP"),
            port=int(os.environ.get("PORT")),
            debug=True)
