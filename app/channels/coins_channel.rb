class CoinsChannel < ApplicationCable::Channel
    def subscribed
      # stream_from "some_channel"
      # @channel = Channel.find(params[:id])
      # stream_for @channel
      
      stream_from "global"
      job = HardJob.new()
      job.perform()
    end
  
    def receive(data)    
    end
  
    def unsubscribed
      # Any cleanup needed when channel is unsubscribed
      stop_all_streams
    end
  end
  