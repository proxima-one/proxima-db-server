# DID

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** |  | [optional] 
**Authentication** | Pointer to [**[]DIDAuthentication**](DIDAuthentication.md) |  | [optional] 

## Methods

### NewDID

`func NewDID() *DID`

NewDID instantiates a new DID object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDIDWithDefaults

`func NewDIDWithDefaults() *DID`

NewDIDWithDefaults instantiates a new DID object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *DID) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *DID) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *DID) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *DID) HasId() bool`

HasId returns a boolean if a field has been set.

### GetAuthentication

`func (o *DID) GetAuthentication() []DIDAuthentication`

GetAuthentication returns the Authentication field if non-nil, zero value otherwise.

### GetAuthenticationOk

`func (o *DID) GetAuthenticationOk() (*[]DIDAuthentication, bool)`

GetAuthenticationOk returns a tuple with the Authentication field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthentication

`func (o *DID) SetAuthentication(v []DIDAuthentication)`

SetAuthentication sets Authentication field to given value.

### HasAuthentication

`func (o *DID) HasAuthentication() bool`

HasAuthentication returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


