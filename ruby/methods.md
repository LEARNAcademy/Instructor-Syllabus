# Ruby Methods

## Simple Method

Methods are used to create small bits of functionality that can be called as many times as we need.

To create methods in Ruby we use the keywords `def` and `end`.

Example:
```RUBY
def hi
  puts "Hello World!"
end
```
`def hi` defines the method and gives it the name `hi`. In between is the code to be executed. The block of code ends with the keyword `end`.

Now we can call the method repeatedly by referencing the name `hi`.

In IRB:
```RUBY
>hi
Hello World!
=>nil
>hi
Hello World!
=>nil
>hi
Hello World!
=>nil
```

When defining methods with variables within them, those variables stay local to that method.

```RUBY
def hi
  response = "This is so much fun"
  puts response
end
```
In IRB:
```RUBY
> hi
This is so much fun
=> nil

> response
  NameError
```

## Method with Parameters

Methods can also take parameters:

```RUBY
def add(num1, num2)
  num1 + num2
end
```

Ruby has an implicit return, which means the value of the last line of a method is automatically returned without using the keyword `return`.

To call the method:
```RUBY
> add(1, 2)   # => 3
> add 1, 3    # => 4
```

Parentheses are optional. They are typically used to make your code easier to read if passing multiple parameters.


## Ruby Blocks

Ruby has anonymous functions similar to Javascript. They are called blocks. Blocks can be created with the `do/end` keywords or with {}.

```RUBY
# Block with a `do/end`
nums.each() do |element|
  puts element
end

# Block with {}
nums.each() { |element| puts element }
```

Blocks can have multiple parameters.

```RUBY
# Block with a `do/end`
nums.each_with_index() do |element, index|
  puts "#{index.to_s} #{element.to_s}"
end

# Block with {}
nums.each_with_index() { |element, index| puts "#{index.to_s} #{element.to_s}" }
```


## Challenges

- Create a method called sum_these_numbers which takes two integers as an argument and prints their sum to the screen.
- Create a method called is_even, which takes a single integer, and which then returns true if the number is even, and false otherwise.
- Create a method that takes a number as an argument and prints "Valid" if the number is between 1 and 10 (inclusive) and "Invalid" otherwise.


## Challenge: Password Checker

### User Stories

You are writing the user registration page for a secure web site.
On the registration page, the user has to enter a user ID and a password, which has to adhere to the to following criteria:

- User ID and password cannot be the same.
- User ID and password have to be at least six characters long.
- Password has to contain at least one of: !#$
- User ID cannot contain the following characters: !#$ or spaces
- Password cannot be the word "password".

### User Stories: Stretch

- As a user, I can enter my user ID and password and find out if the they are acceptable.

### User Stories: Super Stretch

- As a user, my password has to contain at least one digit.


[Go to next lesson: Ruby Loops](./loops.md)

[Back to Ruby Conditionals](./conditionals.md)

[Back to Syllabus](../README.md)
