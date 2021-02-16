class RiderSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :image, :points, :country_id, :country
  # belongs_to :country
end
