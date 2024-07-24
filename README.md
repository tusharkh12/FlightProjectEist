Flight Booking System

Introduction

Welcome to the Flight Booking System project! This is a full-stack application designed for managing flight information, user preferences, and points of interest. The project features a robust backend built with Java and Spring Boot, alongside functionalities for handling flight data, user authentication, and interaction with points of interest.

The goal of this project is to provide a comprehensive solution for users to search, manage, and book flights, as well as explore points of interest and submit feedback.

Project Overview

Features
Flight Management: Create, view, and manage flights with details such as departure and destination.
User Authentication: Register, login, and manage user sessions.
Points of Interest (POI): Retrieve, sort, and filter points of interest for travel destinations.
Survey and Orders: Submit surveys and place orders for food and drinks.
File Handling: Store and retrieve user data and other information from text files.
Architecture
Backend: Java, Spring Boot
Frontend: React.js 
Data Storage: Utilizes text files for storing data (e.g., flights, points of interest)
Data Sources

The application relies on the following datasets:

airports.txt: Contains airport codes and names.
pointsOfInterest.txt: Lists points of interest along with popularity ratings.
Files

README.md: Project overview and instructions.
FlightService.java: Manages flight-related operations.
LocalFlightsInformation.java: Provides functionality for flight data generation and search.
POIService.java: Handles points of interest data, including retrieval and sorting.
SurveyOrderService.java: Manages surveys and food/drink orders.
UserInfo.java: Handles user authentication and session management.
src/main/resources/: Contains data files such as airports.txt and pointsOfInterest.txt.
Installation and Setup

Prerequisites
Java 11 or higher
Maven
