# Stream

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** |  | [optional] 
**State** | Pointer to [**StreamState**](StreamState.md) |  | [optional] 

## Methods

### NewStream

`func NewStream() *Stream`

NewStream instantiates a new Stream object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStreamWithDefaults

`func NewStreamWithDefaults() *Stream`

NewStreamWithDefaults instantiates a new Stream object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Stream) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Stream) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Stream) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Stream) HasId() bool`

HasId returns a boolean if a field has been set.

### GetState

`func (o *Stream) GetState() StreamState`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *Stream) GetStateOk() (*StreamState, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *Stream) SetState(v StreamState)`

SetState sets State field to given value.

### HasState

`func (o *Stream) HasState() bool`

HasState returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


