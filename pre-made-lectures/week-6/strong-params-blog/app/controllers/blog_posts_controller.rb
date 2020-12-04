# rails new app -d postgresql -T
# cd app
# rails db:create
# rails g model BlogPost title:string content:string
# rails db:migrate
# rails g contoller blog_posts
# rails s

# Strong params dictate what attributes can be created and updated by setting restrictions on the controller methods.
# they help us keep people with nefarious intentions from adding unwanted data into our DB by restricting access to only approved columns
class BlogPostsController < ApplicationController
  def index
    @posts = BlogPost.all
  end

  def create
    # pass params here
    @blog_post = BlogPost.create(blog_post_params)
    if @blog_post.valid?
      redirect_to @blog_post
      # redirect_to our show path which is:
      # '/blog_posts/#{instance_variable_name.id}'
    else
      render "sad_path.html.erb"
    end
  end

  def new
    # need to establish what @blog_post is to be used in the form for #new
    @blog_post = BlogPost.new
  end

  # defines the post that will be displayed in the view
  def show
    # this parameter id comes from the redirect in the create method
    @post = BlogPost.find(params[:id])
  end

  def edit
    # create this instance varoable to be used in the view
    @blog_post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # add params as argument
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to @post
      # redirect_to our show path which is:
      # '/blog_posts/#{instance_variable_name.id}'
    else
      render "sad_path.html.erb"
    end
  end

  # private methods cannot be called anywhere else in the program outside of this class
  # everything below this key word is protected
  private
  def blog_post_params
    # strong params will always have a require and a permit
    # require is the most restrictive of the two. it is saying that the params hash MUST have a key of a certain name. in this case, they will all have the key of blog_post
    # permit is less restrictive. it dictates which clumns in the DB you are allowing your user access to
    # if you're adding new columns to the DB that you want your user to have access to, make sure you remember to add it to your strong params
    params.require(:blog_post).permit(:title, :content)
  end
end
