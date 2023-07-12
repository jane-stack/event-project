class AttendancesController < ApplicationController
    before_action :set_event
    before_action :find_attendance, only: [:destroy]
    skip_before_action :authorize, only: [:index]
    before_action only: [:destroy] do
        authorize_user_resource(@attendance.user_id)
    end

    def index
        @attendance = @event.attendances
        render json: @attendance
    end

    def create
        @attendance = @event.attendances.create(attendance_params)
        @attendance.user = current_user
        if @attendance.save
            render json: @attendance, status: 201
        else
            render json: {errors: @attendance.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def destroy
        @attendance = @event.attendances.find(params[:id])
        @attendance.destroy
    end

    private

    def set_event
        @event = Event.find(params[:event_id])
    end

    def attendance_params
        params.permit(:user_id)
    end

    def find_attendance
        @attendance = @event.attendances.find(params[:id])
    end
end
