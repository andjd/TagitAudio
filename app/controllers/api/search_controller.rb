class Api::SearchController < ApplicationController
  def index
    @search_results = PgSearch
      .multisearch(params[:terms])
      .includes(:searchable)
      .page(params[:page])

  end
end
