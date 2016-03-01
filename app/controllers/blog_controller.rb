class BlogController < ApplicationController
   	# http_basic_authenticate_with name: "dhh", password: "secret", except: [:index, :show]	

	def index
    	@blog = Blog.all
  	end


	def show
		@blog = Blog.find(params[:id])
	end

	def new
		# @blog = Blog.new
		flash[:notice] = "Blog under construction. Coming soon!"
		redirect_to blog_index_path
	end

	def edit
  		@blog = Blog.find(params[:id])
	end

	def create
		@blog = Blog.new(blog_params)
 		if @blog.save
  			redirect_to @blog
  		else
  			render 'new'
  		end
		# redirect_to  blog_index_path
	end

	def update
  		@blog = Blog.find(params[:id])
 
		if @blog.update(blog_params)
	    	redirect_to @blog
	  	else
	    	render 'edit'
	  	end
	end

	def destroy
		@blog = Blog.find(params[:id])
		@blog.destroy
		redirect_to blog_index_path
	end

	private
	  def blog_params
	    params.require(:blog).permit(:title, :text)
	  end
end
