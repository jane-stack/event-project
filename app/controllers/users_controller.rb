class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create]

    def index
        @users = User.all
        render json: @users
    end

    def show
        render json: current_user
    end

    def create
        @user = User.new(user_params)
        if @user.save
            session[:user_id] = @user.id
            render json: @user, status: 201
        else
            render json: {errors: @user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def destroy
        @user = User.find(params[:id])
        @user.destroy
    end

    private 

    def user_params
        params.permit(:name, :email, :password)
    end

end
