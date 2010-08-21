require 'net/http'
require 'json'

class GithubAPI
  HOST = "github.com"
  API  = "/api/v2"

  attr_accessor :format
  attr_reader :response, :user
  
  def initialize(username, token, params={})
    @username, @token = username, token
    @format = params[:format] || "json"
    puts username
  end

  def api
    API
  end

  def get_user_info()
    path = [api,format,'user','show'].join('/')
    puts @username
    connect(path, @username, @token)
  end
  
  def get_all_commit_history(value)
  end

  def host
    HOST
  end

private
  def connect(path, username, token)
    params = { :token => token, :login => username }
    query = params.map { |k,v| "#{k}=#{v}" }.join('&')
    Net::HTTP.start(host) do |http|
       req = Net::HTTP::Get.new("#{path}?#{query}")
       @response = http.request(req)
       @user = JSON.parse(@response.body)
    end
  end
end