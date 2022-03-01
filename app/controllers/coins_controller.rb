class CoinsController < ApplicationController

    def report
        ReportWorker.perform_async('test', 'weird')
        
        render json: "REQUEST TO GENERATE A COIN REPORT ADDED TO QUEUE"
    end

end