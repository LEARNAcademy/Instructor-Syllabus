# Puts automatically adds a new line at the end of your message every time you use it.
# If you don’t want a newline, then use print.
# p is a method that shows a more “raw” version of an object.

# Blocks are the anonymous functions of Ruby! They are methods that perform and action and typically act on a variable, but do not have an assignment themselves.
# we can use blocks to iterate

# ***************times********************************
# this will perform a specified action a number of times
17.times do
  puts 'hello'
end

my_age = 12
year = 0
my_age.times do
  puts "happy #{year} birthday!"
  year += 1
end

# ***************each*********************************
# iterates through an array and performs an action on each element.
# Each is like a more primitive version of map. It gives you every element so you can work with it, but it doesn’t collect the results. Each always returns the original, unchanged object.
nums = [1, 2, 3]

nums.each do |value|
  puts value * 3
end

p nums.each { |value| value * 3 }

# ***************each_with_index**********************
# do end - used when you have multi-line solitions
nums.each_with_index do |value, index|
  puts "#{index.to_s} #{value.to_s}"
end
# {} - used for single-line solutions
nums.each_with_index { |value, index| puts "#{index.to_s} #{value.to_s}" }

# ***************while loop***************************
i = 0
while i < 5
  puts i
  i+= 1
end

# ***************map**********************************
# this will also iterate through an array and perform an action on each element. however unlike each, map will return a new array. Map returns a new array with the transformed elements.
my_array = [100, 200, 300]
# do end
my_array.map do |value|
  puts value * 2
end
p my_array
# {}
p my_array.map { |value| value * 2  }

# if you did want to alter the original array, you can do so with a bang operator
# do end
numbers = [2,4,6]
numbers.map! do |value|
  value * 2
end
p numbers
# {}
numbers.map! { |value| value - 1  }
p numbers











#
