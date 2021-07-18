<center><iframe src="https://anmolgautam.com/flappy-bird-genetic-algorithm" width=300 height=700 style="border: none;"></iframe></center>

I have seen many videos and demos on social media about using AI to play
flappy bird. So this weekend, I decided to implement a basic AI which can
play flappy bird. The result of which you can see above.

I started of with the basic assets of flappy bird, and made a quick flappy bird game
using canvas.

The problem of playing flappy bird can be reduced to the problem of predicting
whether to jump based on the distance from the pipe, distancce from gap and
current bird speed. So, I have used a 3 input - 1 output neural network with 5 hidden
layers.

This neural network is trained using a genetic algorithm. Each bird has an
associated "chromosome" which encodes the weighs and bias for the neural
network. The fitness of a chromosome is number of pipes for which it successfully
passes through. For initial generation, each bird is assigned a random chromosomes.
For successive generations, 5 fittest chromosomes are selected and new
chromosomes are created using crossover. The new chromosomes are mutated with
a probability of 0.1. For exact details, you can refer the source at [GitHub](https://github.com/Tarptaeya/flappy-bird-genetic-algorithm).