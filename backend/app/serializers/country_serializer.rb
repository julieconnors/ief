class CountrySerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :flag_image
end
