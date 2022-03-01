require 'net/http'
class HardJob
  include Sidekiq::Job

  def perform()
    # Do something
    uri = URI("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false")
    res = Net::HTTP.get_response(uri)
    ActionCable.server.broadcast "global", res.body
  end
end
