require 'rubygems'
require 'sinatra'

# set utf-8 for outgoing
before do
  headers "Content-Type" => "text/html; charset=utf-8"
end


get '/' do
  @title = "S&G | The Chroncles"
  erb :layout
end