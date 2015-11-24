# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20151124021619) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "annotations", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "episode_id", null: false
    t.string   "body",       null: false
    t.integer  "time",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "annotations", ["episode_id"], name: "index_annotations_on_episode_id", using: :btree
  add_index "annotations", ["user_id"], name: "index_annotations_on_user_id", using: :btree

  create_table "episodes", force: :cascade do |t|
    t.integer  "podcast_id",       null: false
    t.string   "title",            null: false
    t.string   "episode_url",      null: false
    t.integer  "duration"
    t.string   "description",      null: false
    t.datetime "publication_date", null: false
    t.string   "feedjira_id",      null: false
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
    t.string   "mime_type",        null: false
  end

  add_index "episodes", ["description"], name: "index_episodes_on_description", using: :btree
  add_index "episodes", ["feedjira_id"], name: "index_episodes_on_feedjira_id", using: :btree
  add_index "episodes", ["podcast_id"], name: "index_episodes_on_podcast_id", using: :btree
  add_index "episodes", ["publication_date"], name: "index_episodes_on_publication_date", using: :btree
  add_index "episodes", ["title"], name: "index_episodes_on_title", using: :btree

  create_table "podcasts", force: :cascade do |t|
    t.string   "title",       null: false
    t.string   "description", null: false
    t.string   "rss_url",     null: false
    t.string   "image_url"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "podcasts", ["description"], name: "index_podcasts_on_description", using: :btree
  add_index "podcasts", ["title"], name: "index_podcasts_on_title", using: :btree

end
