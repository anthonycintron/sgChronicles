class ::Hash
  def method_missing(name)
    return self[name] if key? name     
    self.each do |k,v| 
      return v if k.to_s.to_sym == name 
    end
  end
end