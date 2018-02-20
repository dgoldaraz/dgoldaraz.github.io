---
layout: post
categories: fracture_simulator
tags: 1.png 2.png 3.png 4.png
title: "Fracture simulator"
year: July, 2011
technology: C++, Bullet Engine, OGRE
findMoreUrl: https://dgoldaraz.github.io/assets/files/fracture_simulation_Daniel_Goldaraz.pdf
date: 2011-07-01
---

This project is about the simulation of physical effects on objects, more specifically about realistic fracture. Fracture is created when an object loses its internal connectivity due to deformation and finally breaks into several pieces. This type of simulation is usually expensive because it involves changes in the topology of objects and advanced calculations are necessary to maintain realism.

This type of realistic simulations provides a lot of details to animations, applying dynamism and allowing the creation of advanced effects. The techniques related to fracture have improved over time, so their implementations are fast enough to be included in videogames or real-time applications.

To calculate the simulation, the implemented algorithm is based on the Finite Element Method (FEM), which allows to know the forces that affect the object when a collision exists. With that method the internal forces are calculated and depending on external parameters (that define the hardness of the object) some pieces will be created.

This process is iterative so the number of pieces and theirs topology are unknow a priori. When the object collides and the force applied is strong enough, the algorithm begins to calculate some random pieces (the pieces are not completely random, because they depend on the point of collision and other values). When the algorithm ends, the topology of the object changes and new pieces are created.

This algorithm provides realistic simulation of fracture without specifying the number of pieces or the distribution of each piece. The only parameter necessary to get a realistic fracture is the hardness of the object. Neither is it necessary to specify the starting point of fracture, because the physics engine will take care of it (in this case, we use Bullet).

This project also integrates a graphics engine (OGRE) which makes the application more aesthetic and useful (using textures, a Graphical User Interface and other effects).