# A hash is a collection of unique keys (symbols) and their values
# A hash is a bit like an array or an object in JS, but instead of the values being referenced by an index, the values are reference by their unique key
# Hashes can be iterated through

# here we are defining a hash for a movie
titanic = { length: "3h 30m", director: "James Cameron", release: "12/19/1997" }
# let's see what we get when we output this
puts titanic
# first, we see flour, sugar, and eggs are output as symbols. symbols in ruby are sen with a colon at the beginning of the word. symbols in a hash must be unique.
# we then see the hash rocket. this is an older syntax and used to be the only way to create hashes in ruby.
# there are a couple of ways to write hashes in ruby, and the newer, today we will use the newer, more JS style of creating them. it's just important to understand what we are looking at in the output

# now lets run the .class method on recipe and see what we get. recipe is an instance of class Hash. everything in ruby is an instance of some sort of blueprinted class.
# since specific hashes are instances of class Hash, lets create a new one from scratch using the syntax of .new (which andee will chat with you all about a little later)
space_jam = Hash.new
# we see an empty hash
puts space_jam
# adding values to a hash is easy! simply write the name of the hash, followed by square brackets. inside the brackets, define a symbol to be a key. now using an = sign, assign a vlaue to that key
space_jam[:length] = "1h 40m"
space_jam[:director] = "Joe Pytka"
space_jam[:release] = "11/10/1996"

puts space_jam

# maybe we need to update our hash. this can be done using the same syntax (see how its looking similar to an array right now?)
space_jam[:release] = "11/15/1996"
puts space_jam

# now we want to add the star of the movie
space_jam[:cast] = "Michael Jordan"
# whoops i really meant the star not the whole cast. lets update that key
#  to update a key, hash[:new_key] = hash.delete :old_key
space_jam[:star] = space_jam.delete :cast
puts space_jam

# if we want to get rid of a key:value pair all together, we can do so by
space_jam.delete(:director)
puts space_jam


# hashes and duck typing
# everything in ruby is an instance of a class. every class has different behaviors allowed to it. for example, anything that is of class iteger can do math, while strings can't.
# Ruby decides which methods belong to which class based on the ability of the class (what it can do) rather than what each class is.
# This concept is called Duck Typing. "If it looks like a duck and quacks like a duck just go ahead and treat it like a duck."
# since Hashes share abilities with classes like Arrays and Ranges, we can use the same methods available to those classes on class Hash. Hashes have the ability to iterate. So we can use methods such as .each and .map on Hashes, even though they are typically thought of as "array methods"
space_jam.each do |key, value|
  puts "The movie's #{key} was #{value}."
end

space_jam.map do |key, value|
  puts "The movie's #{key} was #{value}."
end

# summary
# Hashes are collections of key:value pairs.
# The class Hash can be created by assigning a variable or by using the .new method.
# you can also create a hash all at once using a syntax very similar to a JS object
# Hashes can have new key value pairs added, updated or deleted.
# Hashes have enumerable abilities allowing developer to use methods such as .each and .map to iterate over the key:value pairs.










#
