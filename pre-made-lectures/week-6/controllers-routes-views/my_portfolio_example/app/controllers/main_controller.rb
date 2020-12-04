class MainController < ApplicationController
  def home
    render 'home.html.erb'
  end

  def about_me
    @about = 'I love traveling and camping and generally spending time outdoors.'
    render 'about_me.html.erb'
  end

  def projects
    @project1 = 'Pig Latin'
    @project2 = 'Battleship'
    @project3 = 'Capstone'
    render 'projects.html.erb'
  end
end
