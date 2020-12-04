class Dog
  def initialize(classification)
    @classification = classification
  end

  def get_dog_info
    'This is a dog'
  end
end

class Pointer < Dog
  def initialize classification
    super(classification)
  end

  def get_pointer_info
    "Pointers were bred for several hundred years to “point” birds and small game such as rabbits. The Pointer is a versatile field dog and exceptional family dog breed. They excel in many arenas, from the field to the show ring, agility to obedience."
  end
end

class Gsp < Pointer
  def initialize(classification, breed, name)
    super(classification)
    @breed = breed
    @name = name
    @size = "large"
    @origin = "Germany"
  end

  def get_gsp_info
    "#{ @name } is a #{ @breed }, which is a #{ @classification } dog. They are considered #{ @size } sized and originated in #{ @origin }."
  end
end

class Hound < Dog
  def initialize classification
    super(classification)
  end

  def get_hound_info
    "Hounds possess strong ancestral traits, renowned for their exceptional scenting abilities, great speed, or keen sight. Traditionally hound dogs lead the hunt rather than waiting for the hunter's directions."
  end
end

class Coonhound < Hound
  def initialize(classification, breed, name)
    super(classification)
    @breed = breed
    @name = name
    @size = "extra large"
    @origin = "Belgium"
  end

  def get_bloodhound_info
    "#{ @name } is a #{ @breed }, which is a #{ @classification } dog. They are considered #{ @size } sized and originated in #{ @origin }."
  end
end


jax = Gsp.new("pointer", "GSP", "Jax")
p jax.get_dog_info
p jax.get_pointer_info
p jax.get_gsp_info
juneau = Coonhound.new("hound", "coonhound", "Juneau")
p juneau.get_hound_info
p juneau.get_bloodhound_info
