# CollectionState

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Version** | Pointer to **string** |  | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**Controllers** | Pointer to **[]string** |  | [optional] 
**LatestCommit** | Pointer to **string** |  | [optional] 
**Schema** | Pointer to **[]map[string]interface{}** |  | [optional] 
**Offset** | Pointer to **float32** |  | [optional] 

## Methods

### NewCollectionState

`func NewCollectionState() *CollectionState`

NewCollectionState instantiates a new CollectionState object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCollectionStateWithDefaults

`func NewCollectionStateWithDefaults() *CollectionState`

NewCollectionStateWithDefaults instantiates a new CollectionState object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetVersion

`func (o *CollectionState) GetVersion() string`

GetVersion returns the Version field if non-nil, zero value otherwise.

### GetVersionOk

`func (o *CollectionState) GetVersionOk() (*string, bool)`

GetVersionOk returns a tuple with the Version field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersion

`func (o *CollectionState) SetVersion(v string)`

SetVersion sets Version field to given value.

### HasVersion

`func (o *CollectionState) HasVersion() bool`

HasVersion returns a boolean if a field has been set.

### GetName

`func (o *CollectionState) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CollectionState) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CollectionState) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *CollectionState) HasName() bool`

HasName returns a boolean if a field has been set.

### GetControllers

`func (o *CollectionState) GetControllers() []string`

GetControllers returns the Controllers field if non-nil, zero value otherwise.

### GetControllersOk

`func (o *CollectionState) GetControllersOk() (*[]string, bool)`

GetControllersOk returns a tuple with the Controllers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetControllers

`func (o *CollectionState) SetControllers(v []string)`

SetControllers sets Controllers field to given value.

### HasControllers

`func (o *CollectionState) HasControllers() bool`

HasControllers returns a boolean if a field has been set.

### GetLatestCommit

`func (o *CollectionState) GetLatestCommit() string`

GetLatestCommit returns the LatestCommit field if non-nil, zero value otherwise.

### GetLatestCommitOk

`func (o *CollectionState) GetLatestCommitOk() (*string, bool)`

GetLatestCommitOk returns a tuple with the LatestCommit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLatestCommit

`func (o *CollectionState) SetLatestCommit(v string)`

SetLatestCommit sets LatestCommit field to given value.

### HasLatestCommit

`func (o *CollectionState) HasLatestCommit() bool`

HasLatestCommit returns a boolean if a field has been set.

### GetSchema

`func (o *CollectionState) GetSchema() []map[string]interface{}`

GetSchema returns the Schema field if non-nil, zero value otherwise.

### GetSchemaOk

`func (o *CollectionState) GetSchemaOk() (*[]map[string]interface{}, bool)`

GetSchemaOk returns a tuple with the Schema field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSchema

`func (o *CollectionState) SetSchema(v []map[string]interface{})`

SetSchema sets Schema field to given value.

### HasSchema

`func (o *CollectionState) HasSchema() bool`

HasSchema returns a boolean if a field has been set.

### GetOffset

`func (o *CollectionState) GetOffset() float32`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *CollectionState) GetOffsetOk() (*float32, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *CollectionState) SetOffset(v float32)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *CollectionState) HasOffset() bool`

HasOffset returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


