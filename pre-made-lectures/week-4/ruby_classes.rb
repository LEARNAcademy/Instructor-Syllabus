# p 1.class
# p 1.0.class
# p 'learn'.class
# recipe = {protein: "beans", carbs: "tortilla", veggies: "green peppers"}
# p recipe.class

class IceCream1
  # setter methods set values!
  def set_label label
    # local values in classes are called instance variables
    @label = label
  end

  def set_flavor flavor
    @flavor = flavor
  end

  def set_calories calories
    @calories = calories
  end

  # get methods expose instance variables beyond local scope
  def label
    @label
    # "dessert"
  end

  def flavor
    @flavor
    # vanilla
  end

  def calories
    @calories
    # 180
  end
end
#
# vanilla = IceCream1.new
# vanilla.set_label "dessert"
# vanilla.set_flavor "vanilla"
# vanilla.set_calories 180
# p vanilla.label
# p vanilla.flavor
# p vanilla.calories

class IceCream2
  # set method
  #                 2       2
  def initialize(flavor, calories)
    @label = "dessert"
    #            3
    @flavor = flavor
    #               3
    @calories = calories
  end

  def add_scoops number
    @scoops = number
  end

  # get method
  def label
    @label
  end

  def flavor
    @flavor
  end

  def calories
    @calories
  end

  def scoops
    @scoops
  end
end

#                             1         1
# mint_chip = IceCream2.new("mint chip", 200)
# p mint_chip.flavor
# mint_chip.add_scoops 3
# p mint_chip

# attr_accessor
class IceCream3
  attr_accessor :label, :flavor, :calories

  def initialize(flavor, calories)
    @label = "dessert"
    @flavor = flavor
    @calories = calories
  end
end

butter_pecan = IceCream3.new("butter pecan", 200)
p butter_pecan.label
p butter_pecan.flavor
p butter_pecan.calories











#
