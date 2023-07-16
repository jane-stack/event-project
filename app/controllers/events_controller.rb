class EventsController < ApplicationController
    before_action :find_event, only: [:show, :update, :destroy]
    before_action :authorize, only: [:create]
    before_action :unprocessable_entity_if_not_found, only: [:update, :destroy]
    before_action only: [:update, :destroy] do
        authorize_user_resource(@event.organizer_id)
    end

    def index
        @event = Event.all
        render json: @event
    end

    def show
        render json: @event
    end

    def create
        @event = Event.new(event_params)
        @event.organizer = current_user
        if @event.save
            render json: @event, status: 201
        else
            render json: {errors: @event.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def update
        @event.organizer = current_user
        @event.update(event_params)
        render json: @event
    end

    def destroy
        @event.organizer = current_user
        @event.destroy
        render json: {message: "Event Removed"}
    end

    private

    def event_params
        params.permit(:name, :date, :location)
    end

    def find_event
        @event = Event.find_by_id(params[:id])
    end

    def unprocessable_entity_if_not_found
        render json: {message: "Event not found"}, status: :unprocessable_entity unless @event
    end

end
