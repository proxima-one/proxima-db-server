# AddCollection

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** |  | [optional] 
**Meta** | Pointer to [**AddCollectionMeta**](AddCollectionMeta.md) |  | [optional] 

## Methods

### NewAddCollection

`func NewAddCollection() *AddCollection`

NewAddCollection instantiates a new AddCollection object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAddCollectionWithDefaults

`func NewAddCollectionWithDefaults() *AddCollection`

NewAddCollectionWithDefaults instantiates a new AddCollection object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *AddCollection) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AddCollection) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AddCollection) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AddCollection) HasId() bool`

HasId returns a boolean if a field has been set.

### GetMeta

`func (o *AddCollection) GetMeta() AddCollectionMeta`

GetMeta returns the Meta field if non-nil, zero value otherwise.

### GetMetaOk

`func (o *AddCollection) GetMetaOk() (*AddCollectionMeta, bool)`

GetMetaOk returns a tuple with the Meta field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeta

`func (o *AddCollection) SetMeta(v AddCollectionMeta)`

SetMeta sets Meta field to given value.

### HasMeta

`func (o *AddCollection) HasMeta() bool`

HasMeta returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


