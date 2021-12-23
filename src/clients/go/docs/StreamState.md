# StreamState

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Version** | Pointer to **string** |  | [optional] 
**Controllers** | Pointer to **[]string** |  | [optional] 
**LatestCommit** | Pointer to **string** |  | [optional] 
**Schema** | Pointer to **string** |  | [optional] 
**Offset** | Pointer to **float32** |  | [optional] 

## Methods

### NewStreamState

`func NewStreamState() *StreamState`

NewStreamState instantiates a new StreamState object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStreamStateWithDefaults

`func NewStreamStateWithDefaults() *StreamState`

NewStreamStateWithDefaults instantiates a new StreamState object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetVersion

`func (o *StreamState) GetVersion() string`

GetVersion returns the Version field if non-nil, zero value otherwise.

### GetVersionOk

`func (o *StreamState) GetVersionOk() (*string, bool)`

GetVersionOk returns a tuple with the Version field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersion

`func (o *StreamState) SetVersion(v string)`

SetVersion sets Version field to given value.

### HasVersion

`func (o *StreamState) HasVersion() bool`

HasVersion returns a boolean if a field has been set.

### GetControllers

`func (o *StreamState) GetControllers() []string`

GetControllers returns the Controllers field if non-nil, zero value otherwise.

### GetControllersOk

`func (o *StreamState) GetControllersOk() (*[]string, bool)`

GetControllersOk returns a tuple with the Controllers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetControllers

`func (o *StreamState) SetControllers(v []string)`

SetControllers sets Controllers field to given value.

### HasControllers

`func (o *StreamState) HasControllers() bool`

HasControllers returns a boolean if a field has been set.

### GetLatestCommit

`func (o *StreamState) GetLatestCommit() string`

GetLatestCommit returns the LatestCommit field if non-nil, zero value otherwise.

### GetLatestCommitOk

`func (o *StreamState) GetLatestCommitOk() (*string, bool)`

GetLatestCommitOk returns a tuple with the LatestCommit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLatestCommit

`func (o *StreamState) SetLatestCommit(v string)`

SetLatestCommit sets LatestCommit field to given value.

### HasLatestCommit

`func (o *StreamState) HasLatestCommit() bool`

HasLatestCommit returns a boolean if a field has been set.

### GetSchema

`func (o *StreamState) GetSchema() string`

GetSchema returns the Schema field if non-nil, zero value otherwise.

### GetSchemaOk

`func (o *StreamState) GetSchemaOk() (*string, bool)`

GetSchemaOk returns a tuple with the Schema field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSchema

`func (o *StreamState) SetSchema(v string)`

SetSchema sets Schema field to given value.

### HasSchema

`func (o *StreamState) HasSchema() bool`

HasSchema returns a boolean if a field has been set.

### GetOffset

`func (o *StreamState) GetOffset() float32`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *StreamState) GetOffsetOk() (*float32, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *StreamState) SetOffset(v float32)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *StreamState) HasOffset() bool`

HasOffset returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


