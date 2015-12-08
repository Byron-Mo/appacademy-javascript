class Array
  def my_map &prc
    results = []
    self.each do |el|
      results << prc.call(el)
    end
    results
  end
end
