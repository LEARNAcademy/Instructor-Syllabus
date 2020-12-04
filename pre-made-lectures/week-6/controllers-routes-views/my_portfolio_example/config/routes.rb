Rails.application.routes.draw do
  get '/about' => 'main#about_me'
  get '/projects' => 'main#projects'
  root to: 'main#home'
end
