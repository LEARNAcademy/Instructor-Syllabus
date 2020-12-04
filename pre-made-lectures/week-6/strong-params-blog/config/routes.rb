Rails.application.routes.draw do
  get 'posts' => 'blog_posts#index', as: 'posts'
  get 'blog_posts/new' => 'blog_posts#new', as: 'new_post'
  get 'blog_posts/:id' => 'blog_posts#show', as: 'blog_post'
  post 'blog_posts' => 'blog_posts#create'
  get 'blog_posts/:id/edit' => 'blog_posts#edit'
  patch 'blog_posts/:id' => 'blog_posts#update'
end
