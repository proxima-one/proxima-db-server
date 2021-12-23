# CommitState

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** |  | [optional] 
**Version** | Pointer to **string** |  | [optional] 
**StreamId** | Pointer to **string** |  | [optional] 
**CommitLink** | Pointer to **[]map[string]interface{}** |  | [optional] 
**Data** | Pointer to **[]map[string]interface{}** |  | [optional] 
**CommitPrev** | Pointer to **[]map[string]interface{}** |  | [optional] 
**Signature** | Pointer to **map[string]interface{}** |  | [optional] 

## Methods

### NewCommitState

`func NewCommitState() *CommitState`

NewCommitState instantiates a new CommitState object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCommitStateWithDefaults

`func NewCommitStateWithDefaults() *CommitState`

NewCommitStateWithDefaults instantiates a new CommitState object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *CommitState) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *CommitState) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *CommitState) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *CommitState) HasType() bool`

HasType returns a boolean if a field has been set.

### GetVersion

`func (o *CommitState) GetVersion() string`

GetVersion returns the Version field if non-nil, zero value otherwise.

### GetVersionOk

`func (o *CommitState) GetVersionOk() (*string, bool)`

GetVersionOk returns a tuple with the Version field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersion

`func (o *CommitState) SetVersion(v string)`

SetVersion sets Version field to given value.

### HasVersion

`func (o *CommitState) HasVersion() bool`

HasVersion returns a boolean if a field has been set.

### GetStreamId

`func (o *CommitState) GetStreamId() string`

GetStreamId returns the StreamId field if non-nil, zero value otherwise.

### GetStreamIdOk

`func (o *CommitState) GetStreamIdOk() (*string, bool)`

GetStreamIdOk returns a tuple with the StreamId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStreamId

`func (o *CommitState) SetStreamId(v string)`

SetStreamId sets StreamId field to given value.

### HasStreamId

`func (o *CommitState) HasStreamId() bool`

HasStreamId returns a boolean if a field has been set.

### GetCommitLink

`func (o *CommitState) GetCommitLink() []map[string]interface{}`

GetCommitLink returns the CommitLink field if non-nil, zero value otherwise.

### GetCommitLinkOk

`func (o *CommitState) GetCommitLinkOk() (*[]map[string]interface{}, bool)`

GetCommitLinkOk returns a tuple with the CommitLink field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommitLink

`func (o *CommitState) SetCommitLink(v []map[string]interface{})`

SetCommitLink sets CommitLink field to given value.

### HasCommitLink

`func (o *CommitState) HasCommitLink() bool`

HasCommitLink returns a boolean if a field has been set.

### GetData

`func (o *CommitState) GetData() []map[string]interface{}`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *CommitState) GetDataOk() (*[]map[string]interface{}, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *CommitState) SetData(v []map[string]interface{})`

SetData sets Data field to given value.

### HasData

`func (o *CommitState) HasData() bool`

HasData returns a boolean if a field has been set.

### GetCommitPrev

`func (o *CommitState) GetCommitPrev() []map[string]interface{}`

GetCommitPrev returns the CommitPrev field if non-nil, zero value otherwise.

### GetCommitPrevOk

`func (o *CommitState) GetCommitPrevOk() (*[]map[string]interface{}, bool)`

GetCommitPrevOk returns a tuple with the CommitPrev field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommitPrev

`func (o *CommitState) SetCommitPrev(v []map[string]interface{})`

SetCommitPrev sets CommitPrev field to given value.

### HasCommitPrev

`func (o *CommitState) HasCommitPrev() bool`

HasCommitPrev returns a boolean if a field has been set.

### GetSignature

`func (o *CommitState) GetSignature() map[string]interface{}`

GetSignature returns the Signature field if non-nil, zero value otherwise.

### GetSignatureOk

`func (o *CommitState) GetSignatureOk() (*map[string]interface{}, bool)`

GetSignatureOk returns a tuple with the Signature field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSignature

`func (o *CommitState) SetSignature(v map[string]interface{})`

SetSignature sets Signature field to given value.

### HasSignature

`func (o *CommitState) HasSignature() bool`

HasSignature returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


