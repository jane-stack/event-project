class AttendancesController < ApplicationController
    before_action :set_event

    def create
        @attendance = @event.attendances.build(attendance_params)
        if @attendance.save
            render json: @attendance, status: 201
        else
            render json: {errors: @attendance.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def destroy
        @attendance = @event.attendances.find(params[:id])
        @attendance.destroy
        render json: {message: "Attendance destroyed"}
    end

    private

    def set_event
        @event = Event.find(params[:event_id])
    end

    def attendance_params
        params.permit(:user_id)
    end
end
