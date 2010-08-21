require 'rubygems'
require 'sinatra'

require 'lib/GithubAPI'
require 'lib/hash_to_obj'

# set utf-8 for outgoing
before do
  headers "Content-Type" => "text/html; charset=utf-8"
end


get '/' do
  @title = "S&G | The Chroncles"
  erb :layout
end

get '/github/list' do
  g = GithubAPI.new("anthonycintron", "c87921835a27efeddb110a20f763ef79")
  @list = g.get_user_info.to_s
end