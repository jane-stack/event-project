class SessionsController < ApplicationController
    skip_before_action :authorize, only: [:create]

    def create
        @user = User.find_by_email(params[:email])
        if @user&.authenticate(params[:password])
            session[:user_id] = @user.id
            render json: @user
        else
            render json: {errors: ["Username or Password didn't match"]}, status: :unprocessable_entity
        end
    end

    def destroy
        session.delete :student_id
        render json: {message: "Successfully Logged Out"}
    end

end
