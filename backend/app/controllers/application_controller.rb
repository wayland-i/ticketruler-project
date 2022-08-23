class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  
  get "/shows" do
    shows = Show.all
    shows.to_json
  end

  get "/shows/:id" do
    shows = Show.find(params[:id])
    shows.to_json
  end

  get "/tickets-available" do
    ticket = Ticket.all
    ticket.to_json(only: [:price])
  end

  post "/shows" do
    shows = Show.create(
      show_name: params[:show_name],
      show_time: params[:show_time],
      musician: params[:musician],
      tickets_left: params[:tickets_left]
    )
    shows.to_json
  end

  patch "/shows/:id" do
    shows = Show.find(params[:id])
    shows.update(
      tickets_left: params[:tickets_left] 
    )
    review.to_json
  end

  delete "/shows/:id" do 
    show = Show.find(params[:id])
    show.destroy
    show.to_json
  end

  post "/users" do
    users = User.create(
      full_name: params[:full_name],
      email: params[:email]
    )
    users.to_json
  end

  delete "/users/:id" do 
    users = User.find(params[:id])
    users.destroy
    users.to_json
  end
end
