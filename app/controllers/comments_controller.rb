class CommentsController < ApplicationController
	http_basic_authenticate_with name: "dhh", password: "secret", only: :destroy

	def show
		@blog = @blog = Blog.find(params[:blog_id])
		@comment = @blog.comments.find(params[:id])
	end

	def create
		@blog = Blog.find(params[:blog_id])
    	@comment = @blog.comments.create(comment_params)
    	redirect_to blog_path(@blog)
	end

	def edit
		@blog = Blog.find(params[:blog_id])
		@comment = @blog.comments.find(params[:id])
	end

	def update
		@blog = Blog.find(params[:blog_id])
		@comment = @blog.comments.find(params[:id])
		if @comment.update(comment_params)		
			redirect_to blog_path(@blog)
		else
			render 'edit_blog_comment'
		end
	end

	def destroy
		@blog = Blog.find(params[:blog_id])
		@comment = @blog.comments.find(params[:id])
		@comment.destroy
		redirect_to blog_path(@blog)
	end


	private
	    def comment_params
	      params.require(:comment).permit(:commenter, :body)
	    end
end
