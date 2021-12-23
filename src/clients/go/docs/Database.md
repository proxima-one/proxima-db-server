# Database

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** |  | [optional] 
**Version** | Pointer to **string** |  | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**Collections** | Pointer to **[]map[string]interface{}** |  | [optional] 

## Methods

### NewDatabase

`func NewDatabase() *Database`

NewDatabase instantiates a new Database object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDatabaseWithDefaults

`func NewDatabaseWithDefaults() *Database`

NewDatabaseWithDefaults instantiates a new Database object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Database) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Database) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Database) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Database) HasId() bool`

HasId returns a boolean if a field has been set.

### GetVersion

`func (o *Database) GetVersion() string`

GetVersion returns the Version field if non-nil, zero value otherwise.

### GetVersionOk

`func (o *Database) GetVersionOk() (*string, bool)`

GetVersionOk returns a tuple with the Version field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersion

`func (o *Database) SetVersion(v string)`

SetVersion sets Version field to given value.

### HasVersion

`func (o *Database) HasVersion() bool`

HasVersion returns a boolean if a field has been set.

### GetName

`func (o *Database) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Database) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Database) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Database) HasName() bool`

HasName returns a boolean if a field has been set.

### GetCollections

`func (o *Database) GetCollections() []map[string]interface{}`

GetCollections returns the Collections field if non-nil, zero value otherwise.

### GetCollectionsOk

`func (o *Database) GetCollectionsOk() (*[]map[string]interface{}, bool)`

GetCollectionsOk returns a tuple with the Collections field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCollections

`func (o *Database) SetCollections(v []map[string]interface{})`

SetCollections sets Collections field to given value.

### HasCollections

`func (o *Database) HasCollections() bool`

HasCollections returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


