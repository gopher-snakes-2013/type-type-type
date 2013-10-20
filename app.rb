require 'sinatra'

$LOAD_PATH.unshift(File.expand_path('.'))
#by default ruby
#includes local directory in load path. 


get '/' do 
	erb :index
end