# AddCommit

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** |  | [optional] 
**State** | Pointer to [**AddCommitState**](AddCommitState.md) |  | [optional] 

## Methods

### NewAddCommit

`func NewAddCommit() *AddCommit`

NewAddCommit instantiates a new AddCommit object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAddCommitWithDefaults

`func NewAddCommitWithDefaults() *AddCommit`

NewAddCommitWithDefaults instantiates a new AddCommit object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *AddCommit) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AddCommit) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AddCommit) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AddCommit) HasId() bool`

HasId returns a boolean if a field has been set.

### GetState

`func (o *AddCommit) GetState() AddCommitState`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *AddCommit) GetStateOk() (*AddCommitState, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *AddCommit) SetState(v AddCommitState)`

SetState sets State field to given value.

### HasState

`func (o *AddCommit) HasState() bool`

HasState returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


