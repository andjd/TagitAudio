module SchemaPlus::Views
  module ActiveRecord
    module ConnectionAdapters
      module Sqlite3Adapter

        def views(name = nil)
          SchemaMonkey::Middleware::Schema::Views.start(connection: self, query_name: name, views: []) { |env|
            env.views += env.connection.execute("SELECT name FROM sqlite_master WHERE type='view'", env.query_name).collect{|row| row["name"]}
          }.views
        end

        def view_definition(view_name, name = nil)
          SchemaMonkey::Middleware::Schema::ViewDefinition.start(connection: self, view_name: view_name, query_name: name) { |env|
            sql = env.connection.execute("SELECT sql FROM sqlite_master WHERE type='view' AND name=#{quote(env.view_name)}", env.query_name).collect{|row| row["sql"]}.first
            sql.sub!(/^CREATE VIEW \S* AS\s+/im, '') unless sql.nil?
            env.definition = sql
          }.definition
        end

      end
    end
  end
end
