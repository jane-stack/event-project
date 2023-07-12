class ApplicationController < ActionController::API
    include ActionController::Cookies
    before_action :authorize

    def logged_in?
        !!session[:user_id]
    end
    
    def current_user
        User.find_by_id(session[:user_id])
    end

    def authorize
        render json: {errors: ["You must log in"]}, status: :unauthorized unless logged_in?
    end

    def authorize_user_resource(user_id)
        render json: {errors: ["You do not have permission for this resource"]}, status: :unauthorized unless user_id == current_user.id
    end
end
