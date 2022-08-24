class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here

  #I should just do users/:id'
  #paraming into that for each user

  get "/shows" do
    shows = Show.all
    shows.to_json
  end

  get "/" do
    data = Show.all
    data.to_json(include: { tickets: { include: :user } })
  end

  get "/:id" do
    user = User.find(params[:id])
    user.to_json(include: { tickets: { include: :show } })
  end

  get "/shows/:id" do
    shows = Show.find(params[:id])
    shows.to_json
  end

  get "/tickets-available" do
    ticket = Ticket.all
    ticket.to_json(only: [:price])
  end

  get "/users" do
    users = User.all
    users.to_json
  end

  post "/shows" do
    shows = Show.create(
      show_name: params[:show_name],
      show_time: params[:show_time],
      musician: params[:musician],
      tickets_left: params[:tickets_left],
      image_url: params[:image_url]
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
      email: params[:email],
      password: params[:password]
    )
    users.to_json
  end

  delete "/users/:id" do 
    users = User.find(params[:id])
    users.destroy
    users.to_json
  end
end
