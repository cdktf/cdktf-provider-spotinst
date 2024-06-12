# `elastigroupAzureV3` Submodule <a name="`elastigroupAzureV3` Submodule" id="@cdktf/provider-spotinst.elastigroupAzureV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElastigroupAzureV3 <a name="ElastigroupAzureV3" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3 spotinst_elastigroup_azure_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/elastigroupazurev3"

elastigroupazurev3.NewElastigroupAzureV3(scope Construct, id *string, config ElastigroupAzureV3Config) ElastigroupAzureV3
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config">ElastigroupAzureV3Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config">ElastigroupAzureV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putImage">PutImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putLogin">PutLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putManagedServiceIdentity">PutManagedServiceIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putNetwork">PutNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetCustomData">ResetCustomData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetDesiredCapacity">ResetDesiredCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetDrainingTimeout">ResetDrainingTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetImage">ResetImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetLogin">ResetLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetManagedServiceIdentity">ResetManagedServiceIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetMaxSize">ResetMaxSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetMinSize">ResetMinSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetOnDemandCount">ResetOnDemandCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetSpotPercentage">ResetSpotPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutImage` <a name="PutImage" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putImage"></a>

```go
func PutImage(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putImage.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLogin` <a name="PutLogin" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putLogin"></a>

```go
func PutLogin(value ElastigroupAzureV3Login)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putLogin.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Login">ElastigroupAzureV3Login</a>

---

##### `PutManagedServiceIdentity` <a name="PutManagedServiceIdentity" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putManagedServiceIdentity"></a>

```go
func PutManagedServiceIdentity(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putManagedServiceIdentity.parameter.value"></a>

- *Type:* interface{}

---

##### `PutNetwork` <a name="PutNetwork" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putNetwork"></a>

```go
func PutNetwork(value ElastigroupAzureV3Network)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Network">ElastigroupAzureV3Network</a>

---

##### `PutTags` <a name="PutTags" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCustomData` <a name="ResetCustomData" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetCustomData"></a>

```go
func ResetCustomData()
```

##### `ResetDesiredCapacity` <a name="ResetDesiredCapacity" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetDesiredCapacity"></a>

```go
func ResetDesiredCapacity()
```

##### `ResetDrainingTimeout` <a name="ResetDrainingTimeout" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetDrainingTimeout"></a>

```go
func ResetDrainingTimeout()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetId"></a>

```go
func ResetId()
```

##### `ResetImage` <a name="ResetImage" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetImage"></a>

```go
func ResetImage()
```

##### `ResetLogin` <a name="ResetLogin" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetLogin"></a>

```go
func ResetLogin()
```

##### `ResetManagedServiceIdentity` <a name="ResetManagedServiceIdentity" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetManagedServiceIdentity"></a>

```go
func ResetManagedServiceIdentity()
```

##### `ResetMaxSize` <a name="ResetMaxSize" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetMaxSize"></a>

```go
func ResetMaxSize()
```

##### `ResetMinSize` <a name="ResetMinSize" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetMinSize"></a>

```go
func ResetMinSize()
```

##### `ResetOnDemandCount` <a name="ResetOnDemandCount" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetOnDemandCount"></a>

```go
func ResetOnDemandCount()
```

##### `ResetSpotPercentage` <a name="ResetSpotPercentage" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetSpotPercentage"></a>

```go
func ResetSpotPercentage()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ElastigroupAzureV3 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/elastigroupazurev3"

elastigroupazurev3.ElastigroupAzureV3_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/elastigroupazurev3"

elastigroupazurev3.ElastigroupAzureV3_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/elastigroupazurev3"

elastigroupazurev3.ElastigroupAzureV3_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/elastigroupazurev3"

elastigroupazurev3.ElastigroupAzureV3_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ElastigroupAzureV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ElastigroupAzureV3 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ElastigroupAzureV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ElastigroupAzureV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.image">Image</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList">ElastigroupAzureV3ImageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.login">Login</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference">ElastigroupAzureV3LoginOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.managedServiceIdentity">ManagedServiceIdentity</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList">ElastigroupAzureV3ManagedServiceIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.network">Network</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference">ElastigroupAzureV3NetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.tags">Tags</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList">ElastigroupAzureV3TagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.customDataInput">CustomDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.desiredCapacityInput">DesiredCapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.drainingTimeoutInput">DrainingTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.fallbackToOnDemandInput">FallbackToOnDemandInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.imageInput">ImageInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.loginInput">LoginInput</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Login">ElastigroupAzureV3Login</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.managedServiceIdentityInput">ManagedServiceIdentityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.maxSizeInput">MaxSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.minSizeInput">MinSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.networkInput">NetworkInput</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Network">ElastigroupAzureV3Network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.odSizesInput">OdSizesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.onDemandCountInput">OnDemandCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.osInput">OsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.spotPercentageInput">SpotPercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.spotSizesInput">SpotSizesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.customData">CustomData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.desiredCapacity">DesiredCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.drainingTimeout">DrainingTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.fallbackToOnDemand">FallbackToOnDemand</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.maxSize">MaxSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.minSize">MinSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.odSizes">OdSizes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.onDemandCount">OnDemandCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.os">Os</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.spotPercentage">SpotPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.spotSizes">SpotSizes</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.image"></a>

```go
func Image() ElastigroupAzureV3ImageList
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList">ElastigroupAzureV3ImageList</a>

---

##### `Login`<sup>Required</sup> <a name="Login" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.login"></a>

```go
func Login() ElastigroupAzureV3LoginOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference">ElastigroupAzureV3LoginOutputReference</a>

---

##### `ManagedServiceIdentity`<sup>Required</sup> <a name="ManagedServiceIdentity" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.managedServiceIdentity"></a>

```go
func ManagedServiceIdentity() ElastigroupAzureV3ManagedServiceIdentityList
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList">ElastigroupAzureV3ManagedServiceIdentityList</a>

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.network"></a>

```go
func Network() ElastigroupAzureV3NetworkOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference">ElastigroupAzureV3NetworkOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.tags"></a>

```go
func Tags() ElastigroupAzureV3TagsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList">ElastigroupAzureV3TagsList</a>

---

##### `CustomDataInput`<sup>Optional</sup> <a name="CustomDataInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.customDataInput"></a>

```go
func CustomDataInput() *string
```

- *Type:* *string

---

##### `DesiredCapacityInput`<sup>Optional</sup> <a name="DesiredCapacityInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.desiredCapacityInput"></a>

```go
func DesiredCapacityInput() *f64
```

- *Type:* *f64

---

##### `DrainingTimeoutInput`<sup>Optional</sup> <a name="DrainingTimeoutInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.drainingTimeoutInput"></a>

```go
func DrainingTimeoutInput() *f64
```

- *Type:* *f64

---

##### `FallbackToOnDemandInput`<sup>Optional</sup> <a name="FallbackToOnDemandInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.fallbackToOnDemandInput"></a>

```go
func FallbackToOnDemandInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.imageInput"></a>

```go
func ImageInput() interface{}
```

- *Type:* interface{}

---

##### `LoginInput`<sup>Optional</sup> <a name="LoginInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.loginInput"></a>

```go
func LoginInput() ElastigroupAzureV3Login
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Login">ElastigroupAzureV3Login</a>

---

##### `ManagedServiceIdentityInput`<sup>Optional</sup> <a name="ManagedServiceIdentityInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.managedServiceIdentityInput"></a>

```go
func ManagedServiceIdentityInput() interface{}
```

- *Type:* interface{}

---

##### `MaxSizeInput`<sup>Optional</sup> <a name="MaxSizeInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.maxSizeInput"></a>

```go
func MaxSizeInput() *f64
```

- *Type:* *f64

---

##### `MinSizeInput`<sup>Optional</sup> <a name="MinSizeInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.minSizeInput"></a>

```go
func MinSizeInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.networkInput"></a>

```go
func NetworkInput() ElastigroupAzureV3Network
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Network">ElastigroupAzureV3Network</a>

---

##### `OdSizesInput`<sup>Optional</sup> <a name="OdSizesInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.odSizesInput"></a>

```go
func OdSizesInput() *[]*string
```

- *Type:* *[]*string

---

##### `OnDemandCountInput`<sup>Optional</sup> <a name="OnDemandCountInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.onDemandCountInput"></a>

```go
func OnDemandCountInput() *f64
```

- *Type:* *f64

---

##### `OsInput`<sup>Optional</sup> <a name="OsInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.osInput"></a>

```go
func OsInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `SpotPercentageInput`<sup>Optional</sup> <a name="SpotPercentageInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.spotPercentageInput"></a>

```go
func SpotPercentageInput() *f64
```

- *Type:* *f64

---

##### `SpotSizesInput`<sup>Optional</sup> <a name="SpotSizesInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.spotSizesInput"></a>

```go
func SpotSizesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `CustomData`<sup>Required</sup> <a name="CustomData" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.customData"></a>

```go
func CustomData() *string
```

- *Type:* *string

---

##### `DesiredCapacity`<sup>Required</sup> <a name="DesiredCapacity" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.desiredCapacity"></a>

```go
func DesiredCapacity() *f64
```

- *Type:* *f64

---

##### `DrainingTimeout`<sup>Required</sup> <a name="DrainingTimeout" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.drainingTimeout"></a>

```go
func DrainingTimeout() *f64
```

- *Type:* *f64

---

##### `FallbackToOnDemand`<sup>Required</sup> <a name="FallbackToOnDemand" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.fallbackToOnDemand"></a>

```go
func FallbackToOnDemand() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MaxSize`<sup>Required</sup> <a name="MaxSize" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.maxSize"></a>

```go
func MaxSize() *f64
```

- *Type:* *f64

---

##### `MinSize`<sup>Required</sup> <a name="MinSize" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.minSize"></a>

```go
func MinSize() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OdSizes`<sup>Required</sup> <a name="OdSizes" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.odSizes"></a>

```go
func OdSizes() *[]*string
```

- *Type:* *[]*string

---

##### `OnDemandCount`<sup>Required</sup> <a name="OnDemandCount" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.onDemandCount"></a>

```go
func OnDemandCount() *f64
```

- *Type:* *f64

---

##### `Os`<sup>Required</sup> <a name="Os" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.os"></a>

```go
func Os() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `SpotPercentage`<sup>Required</sup> <a name="SpotPercentage" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.spotPercentage"></a>

```go
func SpotPercentage() *f64
```

- *Type:* *f64

---

##### `SpotSizes`<sup>Required</sup> <a name="SpotSizes" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.spotSizes"></a>

```go
func SpotSizes() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ElastigroupAzureV3Config <a name="ElastigroupAzureV3Config" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/elastigroupazurev3"

&elastigroupazurev3.ElastigroupAzureV3Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	FallbackToOnDemand: interface{},
	Name: *string,
	Network: github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13.elastigroupAzureV3.ElastigroupAzureV3Network,
	OdSizes: *[]*string,
	Os: *string,
	Region: *string,
	ResourceGroupName: *string,
	SpotSizes: *[]*string,
	CustomData: *string,
	DesiredCapacity: *f64,
	DrainingTimeout: *f64,
	Id: *string,
	Image: interface{},
	Login: github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13.elastigroupAzureV3.ElastigroupAzureV3Login,
	ManagedServiceIdentity: interface{},
	MaxSize: *f64,
	MinSize: *f64,
	OnDemandCount: *f64,
	SpotPercentage: *f64,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.fallbackToOnDemand">FallbackToOnDemand</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#fallback_to_on_demand ElastigroupAzureV3#fallback_to_on_demand}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#name ElastigroupAzureV3#name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.network">Network</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Network">ElastigroupAzureV3Network</a></code> | network block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.odSizes">OdSizes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#od_sizes ElastigroupAzureV3#od_sizes}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.os">Os</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#os ElastigroupAzureV3#os}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#region ElastigroupAzureV3#region}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#resource_group_name ElastigroupAzureV3#resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.spotSizes">SpotSizes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#spot_sizes ElastigroupAzureV3#spot_sizes}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.customData">CustomData</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#custom_data ElastigroupAzureV3#custom_data}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.desiredCapacity">DesiredCapacity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#desired_capacity ElastigroupAzureV3#desired_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.drainingTimeout">DrainingTimeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#draining_timeout ElastigroupAzureV3#draining_timeout}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#id ElastigroupAzureV3#id}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.image">Image</a></code> | <code>interface{}</code> | image block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.login">Login</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Login">ElastigroupAzureV3Login</a></code> | login block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.managedServiceIdentity">ManagedServiceIdentity</a></code> | <code>interface{}</code> | managed_service_identity block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.maxSize">MaxSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#max_size ElastigroupAzureV3#max_size}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.minSize">MinSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#min_size ElastigroupAzureV3#min_size}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.onDemandCount">OnDemandCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#on_demand_count ElastigroupAzureV3#on_demand_count}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.spotPercentage">SpotPercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#spot_percentage ElastigroupAzureV3#spot_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.tags">Tags</a></code> | <code>interface{}</code> | tags block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FallbackToOnDemand`<sup>Required</sup> <a name="FallbackToOnDemand" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.fallbackToOnDemand"></a>

```go
FallbackToOnDemand interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#fallback_to_on_demand ElastigroupAzureV3#fallback_to_on_demand}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#name ElastigroupAzureV3#name}.

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.network"></a>

```go
Network ElastigroupAzureV3Network
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Network">ElastigroupAzureV3Network</a>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#network ElastigroupAzureV3#network}

---

##### `OdSizes`<sup>Required</sup> <a name="OdSizes" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.odSizes"></a>

```go
OdSizes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#od_sizes ElastigroupAzureV3#od_sizes}.

---

##### `Os`<sup>Required</sup> <a name="Os" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.os"></a>

```go
Os *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#os ElastigroupAzureV3#os}.

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#region ElastigroupAzureV3#region}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#resource_group_name ElastigroupAzureV3#resource_group_name}.

---

##### `SpotSizes`<sup>Required</sup> <a name="SpotSizes" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.spotSizes"></a>

```go
SpotSizes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#spot_sizes ElastigroupAzureV3#spot_sizes}.

---

##### `CustomData`<sup>Optional</sup> <a name="CustomData" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.customData"></a>

```go
CustomData *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#custom_data ElastigroupAzureV3#custom_data}.

---

##### `DesiredCapacity`<sup>Optional</sup> <a name="DesiredCapacity" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.desiredCapacity"></a>

```go
DesiredCapacity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#desired_capacity ElastigroupAzureV3#desired_capacity}.

---

##### `DrainingTimeout`<sup>Optional</sup> <a name="DrainingTimeout" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.drainingTimeout"></a>

```go
DrainingTimeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#draining_timeout ElastigroupAzureV3#draining_timeout}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#id ElastigroupAzureV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Image`<sup>Optional</sup> <a name="Image" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.image"></a>

```go
Image interface{}
```

- *Type:* interface{}

image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#image ElastigroupAzureV3#image}

---

##### `Login`<sup>Optional</sup> <a name="Login" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.login"></a>

```go
Login ElastigroupAzureV3Login
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Login">ElastigroupAzureV3Login</a>

login block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#login ElastigroupAzureV3#login}

---

##### `ManagedServiceIdentity`<sup>Optional</sup> <a name="ManagedServiceIdentity" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.managedServiceIdentity"></a>

```go
ManagedServiceIdentity interface{}
```

- *Type:* interface{}

managed_service_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#managed_service_identity ElastigroupAzureV3#managed_service_identity}

---

##### `MaxSize`<sup>Optional</sup> <a name="MaxSize" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.maxSize"></a>

```go
MaxSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#max_size ElastigroupAzureV3#max_size}.

---

##### `MinSize`<sup>Optional</sup> <a name="MinSize" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.minSize"></a>

```go
MinSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#min_size ElastigroupAzureV3#min_size}.

---

##### `OnDemandCount`<sup>Optional</sup> <a name="OnDemandCount" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.onDemandCount"></a>

```go
OnDemandCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#on_demand_count ElastigroupAzureV3#on_demand_count}.

---

##### `SpotPercentage`<sup>Optional</sup> <a name="SpotPercentage" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.spotPercentage"></a>

```go
SpotPercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#spot_percentage ElastigroupAzureV3#spot_percentage}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#tags ElastigroupAzureV3#tags}

---

### ElastigroupAzureV3Image <a name="ElastigroupAzureV3Image" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Image"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Image.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/elastigroupazurev3"

&elastigroupazurev3.ElastigroupAzureV3Image {
	Custom: interface{},
	Marketplace: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Image.property.custom">Custom</a></code> | <code>interface{}</code> | custom block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Image.property.marketplace">Marketplace</a></code> | <code>interface{}</code> | marketplace block. |

---

##### `Custom`<sup>Optional</sup> <a name="Custom" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Image.property.custom"></a>

```go
Custom interface{}
```

- *Type:* interface{}

custom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#custom ElastigroupAzureV3#custom}

---

##### `Marketplace`<sup>Optional</sup> <a name="Marketplace" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Image.property.marketplace"></a>

```go
Marketplace interface{}
```

- *Type:* interface{}

marketplace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#marketplace ElastigroupAzureV3#marketplace}

---

### ElastigroupAzureV3ImageCustom <a name="ElastigroupAzureV3ImageCustom" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustom.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/elastigroupazurev3"

&elastigroupazurev3.ElastigroupAzureV3ImageCustom {
	ImageName: *string,
	ResourceGroupName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustom.property.imageName">ImageName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#image_name ElastigroupAzureV3#image_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustom.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#resource_group_name ElastigroupAzureV3#resource_group_name}. |

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustom.property.imageName"></a>

```go
ImageName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#image_name ElastigroupAzureV3#image_name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustom.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#resource_group_name ElastigroupAzureV3#resource_group_name}.

---

### ElastigroupAzureV3ImageMarketplace <a name="ElastigroupAzureV3ImageMarketplace" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplace.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/elastigroupazurev3"

&elastigroupazurev3.ElastigroupAzureV3ImageMarketplace {
	Offer: *string,
	Publisher: *string,
	Sku: *string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplace.property.offer">Offer</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#offer ElastigroupAzureV3#offer}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplace.property.publisher">Publisher</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#publisher ElastigroupAzureV3#publisher}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplace.property.sku">Sku</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#sku ElastigroupAzureV3#sku}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplace.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#version ElastigroupAzureV3#version}. |

---

##### `Offer`<sup>Required</sup> <a name="Offer" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplace.property.offer"></a>

```go
Offer *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#offer ElastigroupAzureV3#offer}.

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplace.property.publisher"></a>

```go
Publisher *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#publisher ElastigroupAzureV3#publisher}.

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplace.property.sku"></a>

```go
Sku *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#sku ElastigroupAzureV3#sku}.

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplace.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#version ElastigroupAzureV3#version}.

---

### ElastigroupAzureV3Login <a name="ElastigroupAzureV3Login" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Login"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Login.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/elastigroupazurev3"

&elastigroupazurev3.ElastigroupAzureV3Login {
	UserName: *string,
	Password: *string,
	SshPublicKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Login.property.userName">UserName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#user_name ElastigroupAzureV3#user_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Login.property.password">Password</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#password ElastigroupAzureV3#password}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Login.property.sshPublicKey">SshPublicKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#ssh_public_key ElastigroupAzureV3#ssh_public_key}. |

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Login.property.userName"></a>

```go
UserName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#user_name ElastigroupAzureV3#user_name}.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Login.property.password"></a>

```go
Password *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#password ElastigroupAzureV3#password}.

---

##### `SshPublicKey`<sup>Optional</sup> <a name="SshPublicKey" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Login.property.sshPublicKey"></a>

```go
SshPublicKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#ssh_public_key ElastigroupAzureV3#ssh_public_key}.

---

### ElastigroupAzureV3ManagedServiceIdentity <a name="ElastigroupAzureV3ManagedServiceIdentity" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/elastigroupazurev3"

&elastigroupazurev3.ElastigroupAzureV3ManagedServiceIdentity {
	Name: *string,
	ResourceGroupName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentity.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#name ElastigroupAzureV3#name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentity.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#resource_group_name ElastigroupAzureV3#resource_group_name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentity.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#name ElastigroupAzureV3#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentity.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#resource_group_name ElastigroupAzureV3#resource_group_name}.

---

### ElastigroupAzureV3Network <a name="ElastigroupAzureV3Network" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Network"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Network.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/elastigroupazurev3"

&elastigroupazurev3.ElastigroupAzureV3Network {
	NetworkInterfaces: interface{},
	ResourceGroupName: *string,
	VirtualNetworkName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Network.property.networkInterfaces">NetworkInterfaces</a></code> | <code>interface{}</code> | network_interfaces block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Network.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#resource_group_name ElastigroupAzureV3#resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Network.property.virtualNetworkName">VirtualNetworkName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#virtual_network_name ElastigroupAzureV3#virtual_network_name}. |

---

##### `NetworkInterfaces`<sup>Required</sup> <a name="NetworkInterfaces" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Network.property.networkInterfaces"></a>

```go
NetworkInterfaces interface{}
```

- *Type:* interface{}

network_interfaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#network_interfaces ElastigroupAzureV3#network_interfaces}

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Network.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#resource_group_name ElastigroupAzureV3#resource_group_name}.

---

##### `VirtualNetworkName`<sup>Required</sup> <a name="VirtualNetworkName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Network.property.virtualNetworkName"></a>

```go
VirtualNetworkName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#virtual_network_name ElastigroupAzureV3#virtual_network_name}.

---

### ElastigroupAzureV3NetworkNetworkInterfaces <a name="ElastigroupAzureV3NetworkNetworkInterfaces" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfaces.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/elastigroupazurev3"

&elastigroupazurev3.ElastigroupAzureV3NetworkNetworkInterfaces {
	AssignPublicIp: interface{},
	IsPrimary: interface{},
	SubnetName: *string,
	AdditionalIpConfigs: interface{},
	ApplicationSecurityGroup: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfaces.property.assignPublicIp">AssignPublicIp</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#assign_public_ip ElastigroupAzureV3#assign_public_ip}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfaces.property.isPrimary">IsPrimary</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#is_primary ElastigroupAzureV3#is_primary}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfaces.property.subnetName">SubnetName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#subnet_name ElastigroupAzureV3#subnet_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfaces.property.additionalIpConfigs">AdditionalIpConfigs</a></code> | <code>interface{}</code> | additional_ip_configs block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfaces.property.applicationSecurityGroup">ApplicationSecurityGroup</a></code> | <code>interface{}</code> | application_security_group block. |

---

##### `AssignPublicIp`<sup>Required</sup> <a name="AssignPublicIp" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfaces.property.assignPublicIp"></a>

```go
AssignPublicIp interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#assign_public_ip ElastigroupAzureV3#assign_public_ip}.

---

##### `IsPrimary`<sup>Required</sup> <a name="IsPrimary" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfaces.property.isPrimary"></a>

```go
IsPrimary interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#is_primary ElastigroupAzureV3#is_primary}.

---

##### `SubnetName`<sup>Required</sup> <a name="SubnetName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfaces.property.subnetName"></a>

```go
SubnetName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#subnet_name ElastigroupAzureV3#subnet_name}.

---

##### `AdditionalIpConfigs`<sup>Optional</sup> <a name="AdditionalIpConfigs" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfaces.property.additionalIpConfigs"></a>

```go
AdditionalIpConfigs interface{}
```

- *Type:* interface{}

additional_ip_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#additional_ip_configs ElastigroupAzureV3#additional_ip_configs}

---

##### `ApplicationSecurityGroup`<sup>Optional</sup> <a name="ApplicationSecurityGroup" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfaces.property.applicationSecurityGroup"></a>

```go
ApplicationSecurityGroup interface{}
```

- *Type:* interface{}

application_security_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#application_security_group ElastigroupAzureV3#application_security_group}

---

### ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs <a name="ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/elastigroupazurev3"

&elastigroupazurev3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs {
	Name: *string,
	PrivateIpVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#name ElastigroupAzureV3#name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs.property.privateIpVersion">PrivateIpVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#private_ip_version ElastigroupAzureV3#private_ip_version}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#name ElastigroupAzureV3#name}.

---

##### `PrivateIpVersion`<sup>Optional</sup> <a name="PrivateIpVersion" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs.property.privateIpVersion"></a>

```go
PrivateIpVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#private_ip_version ElastigroupAzureV3#private_ip_version}.

---

### ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup <a name="ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/elastigroupazurev3"

&elastigroupazurev3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup {
	Name: *string,
	ResourceGroupName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#name ElastigroupAzureV3#name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#resource_group_name ElastigroupAzureV3#resource_group_name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#name ElastigroupAzureV3#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#resource_group_name ElastigroupAzureV3#resource_group_name}.

---

### ElastigroupAzureV3Tags <a name="ElastigroupAzureV3Tags" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Tags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Tags.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/elastigroupazurev3"

&elastigroupazurev3.ElastigroupAzureV3Tags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Tags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#key ElastigroupAzureV3#key}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Tags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#value ElastigroupAzureV3#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Tags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#key ElastigroupAzureV3#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Tags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/elastigroup_azure_v3#value ElastigroupAzureV3#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ElastigroupAzureV3ImageCustomList <a name="ElastigroupAzureV3ImageCustomList" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/elastigroupazurev3"

elastigroupazurev3.NewElastigroupAzureV3ImageCustomList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ElastigroupAzureV3ImageCustomList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.get"></a>

```go
func Get(index *f64) ElastigroupAzureV3ImageCustomOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ElastigroupAzureV3ImageCustomOutputReference <a name="ElastigroupAzureV3ImageCustomOutputReference" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/elastigroupazurev3"

elastigroupazurev3.NewElastigroupAzureV3ImageCustomOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ElastigroupAzureV3ImageCustomOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.property.imageNameInput">ImageNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.property.imageName">ImageName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ImageNameInput`<sup>Optional</sup> <a name="ImageNameInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.property.imageNameInput"></a>

```go
func ImageNameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.property.imageName"></a>

```go
func ImageName() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ElastigroupAzureV3ImageList <a name="ElastigroupAzureV3ImageList" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/elastigroupazurev3"

elastigroupazurev3.NewElastigroupAzureV3ImageList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ElastigroupAzureV3ImageList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.get"></a>

```go
func Get(index *f64) ElastigroupAzureV3ImageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ElastigroupAzureV3ImageMarketplaceList <a name="ElastigroupAzureV3ImageMarketplaceList" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/elastigroupazurev3"

elastigroupazurev3.NewElastigroupAzureV3ImageMarketplaceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ElastigroupAzureV3ImageMarketplaceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.get"></a>

```go
func Get(index *f64) ElastigroupAzureV3ImageMarketplaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ElastigroupAzureV3ImageMarketplaceOutputReference <a name="ElastigroupAzureV3ImageMarketplaceOutputReference" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/elastigroupazurev3"

elastigroupazurev3.NewElastigroupAzureV3ImageMarketplaceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ElastigroupAzureV3ImageMarketplaceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.offerInput">OfferInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.publisherInput">PublisherInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.skuInput">SkuInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.offer">Offer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.publisher">Publisher</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.sku">Sku</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OfferInput`<sup>Optional</sup> <a name="OfferInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.offerInput"></a>

```go
func OfferInput() *string
```

- *Type:* *string

---

##### `PublisherInput`<sup>Optional</sup> <a name="PublisherInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.publisherInput"></a>

```go
func PublisherInput() *string
```

- *Type:* *string

---

##### `SkuInput`<sup>Optional</sup> <a name="SkuInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.skuInput"></a>

```go
func SkuInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Offer`<sup>Required</sup> <a name="Offer" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.offer"></a>

```go
func Offer() *string
```

- *Type:* *string

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.publisher"></a>

```go
func Publisher() *string
```

- *Type:* *string

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.sku"></a>

```go
func Sku() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ElastigroupAzureV3ImageOutputReference <a name="ElastigroupAzureV3ImageOutputReference" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/elastigroupazurev3"

elastigroupazurev3.NewElastigroupAzureV3ImageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ElastigroupAzureV3ImageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.putCustom">PutCustom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.putMarketplace">PutMarketplace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.resetCustom">ResetCustom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.resetMarketplace">ResetMarketplace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustom` <a name="PutCustom" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.putCustom"></a>

```go
func PutCustom(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.putCustom.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMarketplace` <a name="PutMarketplace" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.putMarketplace"></a>

```go
func PutMarketplace(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.putMarketplace.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCustom` <a name="ResetCustom" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.resetCustom"></a>

```go
func ResetCustom()
```

##### `ResetMarketplace` <a name="ResetMarketplace" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.resetMarketplace"></a>

```go
func ResetMarketplace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.property.custom">Custom</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList">ElastigroupAzureV3ImageCustomList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.property.marketplace">Marketplace</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList">ElastigroupAzureV3ImageMarketplaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.property.customInput">CustomInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.property.marketplaceInput">MarketplaceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Custom`<sup>Required</sup> <a name="Custom" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.property.custom"></a>

```go
func Custom() ElastigroupAzureV3ImageCustomList
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList">ElastigroupAzureV3ImageCustomList</a>

---

##### `Marketplace`<sup>Required</sup> <a name="Marketplace" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.property.marketplace"></a>

```go
func Marketplace() ElastigroupAzureV3ImageMarketplaceList
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList">ElastigroupAzureV3ImageMarketplaceList</a>

---

##### `CustomInput`<sup>Optional</sup> <a name="CustomInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.property.customInput"></a>

```go
func CustomInput() interface{}
```

- *Type:* interface{}

---

##### `MarketplaceInput`<sup>Optional</sup> <a name="MarketplaceInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.property.marketplaceInput"></a>

```go
func MarketplaceInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ElastigroupAzureV3LoginOutputReference <a name="ElastigroupAzureV3LoginOutputReference" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/elastigroupazurev3"

elastigroupazurev3.NewElastigroupAzureV3LoginOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ElastigroupAzureV3LoginOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.resetSshPublicKey">ResetSshPublicKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetSshPublicKey` <a name="ResetSshPublicKey" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.resetSshPublicKey"></a>

```go
func ResetSshPublicKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.property.sshPublicKeyInput">SshPublicKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.property.userNameInput">UserNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.property.sshPublicKey">SshPublicKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.property.userName">UserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Login">ElastigroupAzureV3Login</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `SshPublicKeyInput`<sup>Optional</sup> <a name="SshPublicKeyInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.property.sshPublicKeyInput"></a>

```go
func SshPublicKeyInput() *string
```

- *Type:* *string

---

##### `UserNameInput`<sup>Optional</sup> <a name="UserNameInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.property.userNameInput"></a>

```go
func UserNameInput() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `SshPublicKey`<sup>Required</sup> <a name="SshPublicKey" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.property.sshPublicKey"></a>

```go
func SshPublicKey() *string
```

- *Type:* *string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.property.userName"></a>

```go
func UserName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.property.internalValue"></a>

```go
func InternalValue() ElastigroupAzureV3Login
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Login">ElastigroupAzureV3Login</a>

---


### ElastigroupAzureV3ManagedServiceIdentityList <a name="ElastigroupAzureV3ManagedServiceIdentityList" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/elastigroupazurev3"

elastigroupazurev3.NewElastigroupAzureV3ManagedServiceIdentityList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ElastigroupAzureV3ManagedServiceIdentityList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.get"></a>

```go
func Get(index *f64) ElastigroupAzureV3ManagedServiceIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ElastigroupAzureV3ManagedServiceIdentityOutputReference <a name="ElastigroupAzureV3ManagedServiceIdentityOutputReference" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/elastigroupazurev3"

elastigroupazurev3.NewElastigroupAzureV3ManagedServiceIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ElastigroupAzureV3ManagedServiceIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList <a name="ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/elastigroupazurev3"

elastigroupazurev3.NewElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.get"></a>

```go
func Get(index *f64) ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference <a name="ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/elastigroupazurev3"

elastigroupazurev3.NewElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.resetPrivateIpVersion">ResetPrivateIpVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrivateIpVersion` <a name="ResetPrivateIpVersion" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.resetPrivateIpVersion"></a>

```go
func ResetPrivateIpVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.property.privateIpVersionInput">PrivateIpVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.property.privateIpVersion">PrivateIpVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PrivateIpVersionInput`<sup>Optional</sup> <a name="PrivateIpVersionInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.property.privateIpVersionInput"></a>

```go
func PrivateIpVersionInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PrivateIpVersion`<sup>Required</sup> <a name="PrivateIpVersion" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.property.privateIpVersion"></a>

```go
func PrivateIpVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList <a name="ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/elastigroupazurev3"

elastigroupazurev3.NewElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.get"></a>

```go
func Get(index *f64) ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference <a name="ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/elastigroupazurev3"

elastigroupazurev3.NewElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ElastigroupAzureV3NetworkNetworkInterfacesList <a name="ElastigroupAzureV3NetworkNetworkInterfacesList" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/elastigroupazurev3"

elastigroupazurev3.NewElastigroupAzureV3NetworkNetworkInterfacesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ElastigroupAzureV3NetworkNetworkInterfacesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.get"></a>

```go
func Get(index *f64) ElastigroupAzureV3NetworkNetworkInterfacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ElastigroupAzureV3NetworkNetworkInterfacesOutputReference <a name="ElastigroupAzureV3NetworkNetworkInterfacesOutputReference" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/elastigroupazurev3"

elastigroupazurev3.NewElastigroupAzureV3NetworkNetworkInterfacesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ElastigroupAzureV3NetworkNetworkInterfacesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.putAdditionalIpConfigs">PutAdditionalIpConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.putApplicationSecurityGroup">PutApplicationSecurityGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.resetAdditionalIpConfigs">ResetAdditionalIpConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.resetApplicationSecurityGroup">ResetApplicationSecurityGroup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdditionalIpConfigs` <a name="PutAdditionalIpConfigs" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.putAdditionalIpConfigs"></a>

```go
func PutAdditionalIpConfigs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.putAdditionalIpConfigs.parameter.value"></a>

- *Type:* interface{}

---

##### `PutApplicationSecurityGroup` <a name="PutApplicationSecurityGroup" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.putApplicationSecurityGroup"></a>

```go
func PutApplicationSecurityGroup(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.putApplicationSecurityGroup.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAdditionalIpConfigs` <a name="ResetAdditionalIpConfigs" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.resetAdditionalIpConfigs"></a>

```go
func ResetAdditionalIpConfigs()
```

##### `ResetApplicationSecurityGroup` <a name="ResetApplicationSecurityGroup" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.resetApplicationSecurityGroup"></a>

```go
func ResetApplicationSecurityGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.additionalIpConfigs">AdditionalIpConfigs</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList">ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.applicationSecurityGroup">ApplicationSecurityGroup</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList">ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.additionalIpConfigsInput">AdditionalIpConfigsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.applicationSecurityGroupInput">ApplicationSecurityGroupInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.assignPublicIpInput">AssignPublicIpInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.isPrimaryInput">IsPrimaryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.subnetNameInput">SubnetNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.assignPublicIp">AssignPublicIp</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.isPrimary">IsPrimary</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.subnetName">SubnetName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalIpConfigs`<sup>Required</sup> <a name="AdditionalIpConfigs" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.additionalIpConfigs"></a>

```go
func AdditionalIpConfigs() ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList">ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList</a>

---

##### `ApplicationSecurityGroup`<sup>Required</sup> <a name="ApplicationSecurityGroup" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.applicationSecurityGroup"></a>

```go
func ApplicationSecurityGroup() ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList">ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList</a>

---

##### `AdditionalIpConfigsInput`<sup>Optional</sup> <a name="AdditionalIpConfigsInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.additionalIpConfigsInput"></a>

```go
func AdditionalIpConfigsInput() interface{}
```

- *Type:* interface{}

---

##### `ApplicationSecurityGroupInput`<sup>Optional</sup> <a name="ApplicationSecurityGroupInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.applicationSecurityGroupInput"></a>

```go
func ApplicationSecurityGroupInput() interface{}
```

- *Type:* interface{}

---

##### `AssignPublicIpInput`<sup>Optional</sup> <a name="AssignPublicIpInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.assignPublicIpInput"></a>

```go
func AssignPublicIpInput() interface{}
```

- *Type:* interface{}

---

##### `IsPrimaryInput`<sup>Optional</sup> <a name="IsPrimaryInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.isPrimaryInput"></a>

```go
func IsPrimaryInput() interface{}
```

- *Type:* interface{}

---

##### `SubnetNameInput`<sup>Optional</sup> <a name="SubnetNameInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.subnetNameInput"></a>

```go
func SubnetNameInput() *string
```

- *Type:* *string

---

##### `AssignPublicIp`<sup>Required</sup> <a name="AssignPublicIp" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.assignPublicIp"></a>

```go
func AssignPublicIp() interface{}
```

- *Type:* interface{}

---

##### `IsPrimary`<sup>Required</sup> <a name="IsPrimary" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.isPrimary"></a>

```go
func IsPrimary() interface{}
```

- *Type:* interface{}

---

##### `SubnetName`<sup>Required</sup> <a name="SubnetName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.subnetName"></a>

```go
func SubnetName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ElastigroupAzureV3NetworkOutputReference <a name="ElastigroupAzureV3NetworkOutputReference" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/elastigroupazurev3"

elastigroupazurev3.NewElastigroupAzureV3NetworkOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ElastigroupAzureV3NetworkOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.putNetworkInterfaces">PutNetworkInterfaces</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNetworkInterfaces` <a name="PutNetworkInterfaces" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.putNetworkInterfaces"></a>

```go
func PutNetworkInterfaces(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.putNetworkInterfaces.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.property.networkInterfaces">NetworkInterfaces</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList">ElastigroupAzureV3NetworkNetworkInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.property.networkInterfacesInput">NetworkInterfacesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.property.virtualNetworkNameInput">VirtualNetworkNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.property.virtualNetworkName">VirtualNetworkName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Network">ElastigroupAzureV3Network</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NetworkInterfaces`<sup>Required</sup> <a name="NetworkInterfaces" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.property.networkInterfaces"></a>

```go
func NetworkInterfaces() ElastigroupAzureV3NetworkNetworkInterfacesList
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList">ElastigroupAzureV3NetworkNetworkInterfacesList</a>

---

##### `NetworkInterfacesInput`<sup>Optional</sup> <a name="NetworkInterfacesInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.property.networkInterfacesInput"></a>

```go
func NetworkInterfacesInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `VirtualNetworkNameInput`<sup>Optional</sup> <a name="VirtualNetworkNameInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.property.virtualNetworkNameInput"></a>

```go
func VirtualNetworkNameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `VirtualNetworkName`<sup>Required</sup> <a name="VirtualNetworkName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.property.virtualNetworkName"></a>

```go
func VirtualNetworkName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.property.internalValue"></a>

```go
func InternalValue() ElastigroupAzureV3Network
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Network">ElastigroupAzureV3Network</a>

---


### ElastigroupAzureV3TagsList <a name="ElastigroupAzureV3TagsList" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/elastigroupazurev3"

elastigroupazurev3.NewElastigroupAzureV3TagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ElastigroupAzureV3TagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.get"></a>

```go
func Get(index *f64) ElastigroupAzureV3TagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ElastigroupAzureV3TagsOutputReference <a name="ElastigroupAzureV3TagsOutputReference" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/elastigroupazurev3"

elastigroupazurev3.NewElastigroupAzureV3TagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ElastigroupAzureV3TagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



