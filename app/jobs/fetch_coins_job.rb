class FetchCoinsJob < ApplicationJob
  queue_as :default

  def perform(*args)
    # Do something later
    return 'hit'
  end
end
