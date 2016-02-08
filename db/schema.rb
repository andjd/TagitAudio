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

ActiveRecord::Schema.define(version: 20160208180356) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"
  enable_extension "citext"

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

  create_table "follows", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "podcast_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end
  add_index "follows", ["podcast_id"], name: "index_follows_on_podcast_id", using: :btree
  add_index "follows", ["user_id"], name: "index_follows_on_user_id", using: :btree

  create_table "likes", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "episode_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end
  add_index "likes", ["episode_id"], name: "index_likes_on_episode_id", using: :btree
  add_index "likes", ["user_id"], name: "index_likes_on_user_id", using: :btree

  create_table "pg_search_documents", force: :cascade do |t|
    t.text     "content"
    t.integer  "searchable_id"
    t.string   "searchable_type"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end
  add_index "pg_search_documents", ["searchable_type", "searchable_id"], name: "index_pg_search_documents_on_searchable_type_and_searchable_id", using: :btree

  create_table "podcasts", force: :cascade do |t|
    t.string   "title",            null: false
    t.string   "description",      null: false
    t.string   "rss_url",          null: false
    t.string   "image_url"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
    t.string   "background_color"
  end
  add_index "podcasts", ["description"], name: "index_podcasts_on_description", using: :btree
  add_index "podcasts", ["title"], name: "index_podcasts_on_title", using: :btree

  create_view "trending_scores", <<-'END_VIEW_TRENDING_SCORES', :force => true
SELECT e.id AS episode_id,
    COALESCE(sum(((1)::double precision / ((1)::double precision + (exp((((date_part('day'::text, (now() - (a.created_at)::timestamp with time zone)) * (24)::double precision) + date_part('hour'::text, (now() - (a.created_at)::timestamp with time zone))) - (40)::double precision)) / (8)::double precision)))), (0)::double precision) AS score
   FROM (episodes e
     JOIN annotations a ON ((e.id = a.episode_id)))
  WHERE (date_part('day'::text, (now() - (a.created_at)::timestamp with time zone)) < (29)::double precision)
  GROUP BY e.id
  END_VIEW_TRENDING_SCORES

  create_table "users", force: :cascade do |t|
    t.string   "username",            null: false
    t.citext   "email"
    t.string   "hashword",            null: false
    t.string   "token",               null: false
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
    t.string   "avatar_file_name"
    t.string   "avatar_content_type"
    t.integer  "avatar_file_size"
    t.datetime "avatar_updated_at"
    t.string   "provider"
    t.string   "uid"
    t.string   "avatar"
  end
  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["hashword"], name: "index_users_on_hashword", using: :btree
  add_index "users", ["provider", "uid"], name: "index_users_on_provider_and_uid", unique: true, using: :btree
  add_index "users", ["provider"], name: "index_users_on_provider", using: :btree
  add_index "users", ["token"], name: "index_users_on_token", unique: true, using: :btree
  add_index "users", ["uid"], name: "index_users_on_uid", using: :btree
  add_index "users", ["username"], name: "index_users_on_username", using: :btree

end
