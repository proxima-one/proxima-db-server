# Schema

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Schema** | **string** |  | 
**Title** | Pointer to **string** |  | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**Type** | Pointer to **string** |  | [optional] 
**Properties** | Pointer to **map[string]interface{}** |  | [optional] 
**Required** | Pointer to **[]map[string]interface{}** |  | [optional] 
**Tags** | Pointer to **[]map[string]interface{}** |  | [optional] 

## Methods

### NewSchema

`func NewSchema(schema string, ) *Schema`

NewSchema instantiates a new Schema object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSchemaWithDefaults

`func NewSchemaWithDefaults() *Schema`

NewSchemaWithDefaults instantiates a new Schema object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSchema

`func (o *Schema) GetSchema() string`

GetSchema returns the Schema field if non-nil, zero value otherwise.

### GetSchemaOk

`func (o *Schema) GetSchemaOk() (*string, bool)`

GetSchemaOk returns a tuple with the Schema field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSchema

`func (o *Schema) SetSchema(v string)`

SetSchema sets Schema field to given value.


### GetTitle

`func (o *Schema) GetTitle() string`

GetTitle returns the Title field if non-nil, zero value otherwise.

### GetTitleOk

`func (o *Schema) GetTitleOk() (*string, bool)`

GetTitleOk returns a tuple with the Title field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTitle

`func (o *Schema) SetTitle(v string)`

SetTitle sets Title field to given value.

### HasTitle

`func (o *Schema) HasTitle() bool`

HasTitle returns a boolean if a field has been set.

### GetDescription

`func (o *Schema) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Schema) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Schema) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Schema) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetType

`func (o *Schema) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Schema) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Schema) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Schema) HasType() bool`

HasType returns a boolean if a field has been set.

### GetProperties

`func (o *Schema) GetProperties() map[string]interface{}`

GetProperties returns the Properties field if non-nil, zero value otherwise.

### GetPropertiesOk

`func (o *Schema) GetPropertiesOk() (*map[string]interface{}, bool)`

GetPropertiesOk returns a tuple with the Properties field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProperties

`func (o *Schema) SetProperties(v map[string]interface{})`

SetProperties sets Properties field to given value.

### HasProperties

`func (o *Schema) HasProperties() bool`

HasProperties returns a boolean if a field has been set.

### GetRequired

`func (o *Schema) GetRequired() []map[string]interface{}`

GetRequired returns the Required field if non-nil, zero value otherwise.

### GetRequiredOk

`func (o *Schema) GetRequiredOk() (*[]map[string]interface{}, bool)`

GetRequiredOk returns a tuple with the Required field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequired

`func (o *Schema) SetRequired(v []map[string]interface{})`

SetRequired sets Required field to given value.

### HasRequired

`func (o *Schema) HasRequired() bool`

HasRequired returns a boolean if a field has been set.

### GetTags

`func (o *Schema) GetTags() []map[string]interface{}`

GetTags returns the Tags field if non-nil, zero value otherwise.

### GetTagsOk

`func (o *Schema) GetTagsOk() (*[]map[string]interface{}, bool)`

GetTagsOk returns a tuple with the Tags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTags

`func (o *Schema) SetTags(v []map[string]interface{})`

SetTags sets Tags field to given value.

### HasTags

`func (o *Schema) HasTags() bool`

HasTags returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


