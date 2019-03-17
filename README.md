# Brand Service

<p>A Node.js server connected to a cloud Mongo database which exposes HTTP endpoints for managing Publishers, Brands and Categories.</p>

<p><b>Note</b>: The databse is prepopulated with some test data. Written and tested with Node v7.2.0.</p>

<hr>

## How to Start

    > npm install
    > npm start

<p><b>Note</b>: All endpoints, by default, will be accessed at http://localhost:3000/api/...</p>

<hr>

<p>&nbsp;</p>
<p>&nbsp;</p>

## Publisher API

##### Model

    {
        _id: ObjectId
        name: String,
        publisherNumber: Number,
        blacklistedCategories: [Category Models],
        blacklistedBrands: [Brand Models],
        createdAt: Date,
        updatedAt: Date
    }

##### Get all Publishers

    GET...http://localhost:3000/api/publisher
    
    Response:
    [Publisher]
    
##### Get Publisher by Id

    GET...http://localhost:3000/api/publisher/{id}
    
    Response:
    {Publisher}
    
##### Get Publishers by Name Search (paged)

    GET...http://localhost:3000/api/publisher/name/search?q={query string}&page={page #}&limit={# results per request}
    
    Response:
    [Publisher]
    
##### Create Publisher

    POST...http://localhost:3000/api/publisher
    
    Body:
    {
        name: String    (required)
    }
    
    Response:
    {Publisher}
    
##### Update Publisher

    PUT...http://localhost:3000/api/publisher
    
    Body:
    {
        _id: ObjectId   (required)
        name: String,
        publisherNumber: Number,
        blacklistedCategories: [Category Models] OR [ObjectId],
        blacklistedBrands: [Brand Models] OR [ObjectId]
    }
    
    Response:
    {Publisher} 
    
##### Delete Publisher by Id

    DELETE...http://localhost:3000/api/publisher/{id}
    
    Response:
    ObjectId
    
##### Delete Multiple Publishers

    DELETE...http://localhost:3000/api/publisher/delete/multiple
    
    Body:
    [ObjectId]
    
    Response:
    [ObjectId]

<p>&nbsp;</p>
<p>&nbsp;</p>

## Brand API

##### Model

    {
        _id: ObjectId
        name: String,
        category: Category Model,
        createdAt: Date,
        updatedAt: Date
    }

##### Get all Brands

    GET...http://localhost:3000/api/brand
    
    Response:
    [Brand]
    
##### Get Brand by Id

    GET...http://localhost:3000/api/brand/{id}
    
    Response:
    {Brand}
    
##### Get Brands by Name Search (paged)

    GET...http://localhost:3000/api/brand/name/search?q={query string}&page={page #}&limit={# results per request}
    
    Response:
    [Brand]
    
##### Create Brand

    POST...http://localhost:3000/api/brand
    
    Body:
    {
        name: String    (required)
        category: {Category Model} OR ObjectId
    }
    
    Response:
    {Brand}
    
##### Update Brand

    PUT...http://localhost:3000/api/brand
    
    Body:
    {
        _id: ObjectId   (required)
        name: String
        category: {Category Model} OR ObjectId
    }
    
    Response:
    {Brand} 
    
##### Delete Brand by Id

    DELETE...http://localhost:3000/api/brand/{id}
    
    Response:
    ObjectId
    
##### Delete Multiple Brands

    DELETE...http://localhost:3000/api/brand/delete/multiple
    
    Body:
    [ObjectId]
    
    Response:
    [ObjectId]

<p>&nbsp;</p>
<p>&nbsp;</p>

## Category API

##### Model

    {
        _id: ObjectId
        name: String,
        description: String,
        createdAt: Date,
        updatedAt: Date
    }

##### Get all Categories

    GET...http://localhost:3000/api/category
    
    Response:
    [Category]
    
##### Get Category by Id

    GET...http://localhost:3000/api/category/{id}
    
    Response:
    {Category}
    
##### Get Categories by Name Search (paged)

    GET...http://localhost:3000/api/category/name/search?q={query string}&page={page #}&limit={# results per request}
    
    Response:
    [Category]
    
##### Create Category

    POST...http://localhost:3000/api/category
    
    Body:
    {
        name: String    (required)
        description: String
    }
    
    Response:
    {Category}
    
##### Update Category

    PUT...http://localhost:3000/api/category
    
    Body:
    {
        _id: ObjectId   (required)
        name: String
        description: String
    }
    
    Response:
    {Category} 
    
##### Delete Category by Id

    DELETE...http://localhost:3000/api/category/{id}
    
    Response:
    ObjectId
    
##### Delete Multiple Categories

    DELETE...http://localhost:3000/api/category/delete/multiple
    
    Body:
    [ObjectId]
    
    Response:
    [ObjectId]

   
<p>&nbsp;</p>