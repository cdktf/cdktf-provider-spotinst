# `oceancdVerificationProvider` Submodule <a name="`oceancdVerificationProvider` Submodule" id="@cdktf/provider-spotinst.oceancdVerificationProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OceancdVerificationProvider <a name="OceancdVerificationProvider" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.0/docs/resources/oceancd_verification_provider spotinst_oceancd_verification_provider}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationprovider"

oceancdverificationprovider.NewOceancdVerificationProvider(scope Construct, id *string, config OceancdVerificationProviderConfig) OceancdVerificationProvider
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig">OceancdVerificationProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig">OceancdVerificationProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.putCloudWatch">PutCloudWatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.putDatadog">PutDatadog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.putJenkins">PutJenkins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.putNewRelic">PutNewRelic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.putPrometheus">PutPrometheus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.resetCloudWatch">ResetCloudWatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.resetDatadog">ResetDatadog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.resetJenkins">ResetJenkins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.resetNewRelic">ResetNewRelic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.resetPrometheus">ResetPrometheus</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCloudWatch` <a name="PutCloudWatch" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.putCloudWatch"></a>

```go
func PutCloudWatch(value OceancdVerificationProviderCloudWatch)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.putCloudWatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatch">OceancdVerificationProviderCloudWatch</a>

---

##### `PutDatadog` <a name="PutDatadog" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.putDatadog"></a>

```go
func PutDatadog(value OceancdVerificationProviderDatadog)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.putDatadog.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadog">OceancdVerificationProviderDatadog</a>

---

##### `PutJenkins` <a name="PutJenkins" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.putJenkins"></a>

```go
func PutJenkins(value OceancdVerificationProviderJenkins)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.putJenkins.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkins">OceancdVerificationProviderJenkins</a>

---

##### `PutNewRelic` <a name="PutNewRelic" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.putNewRelic"></a>

```go
func PutNewRelic(value OceancdVerificationProviderNewRelic)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.putNewRelic.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic">OceancdVerificationProviderNewRelic</a>

---

##### `PutPrometheus` <a name="PutPrometheus" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.putPrometheus"></a>

```go
func PutPrometheus(value OceancdVerificationProviderPrometheus)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.putPrometheus.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheus">OceancdVerificationProviderPrometheus</a>

---

##### `ResetCloudWatch` <a name="ResetCloudWatch" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.resetCloudWatch"></a>

```go
func ResetCloudWatch()
```

##### `ResetDatadog` <a name="ResetDatadog" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.resetDatadog"></a>

```go
func ResetDatadog()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.resetId"></a>

```go
func ResetId()
```

##### `ResetJenkins` <a name="ResetJenkins" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.resetJenkins"></a>

```go
func ResetJenkins()
```

##### `ResetNewRelic` <a name="ResetNewRelic" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.resetNewRelic"></a>

```go
func ResetNewRelic()
```

##### `ResetPrometheus` <a name="ResetPrometheus" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.resetPrometheus"></a>

```go
func ResetPrometheus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OceancdVerificationProvider resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationprovider"

oceancdverificationprovider.OceancdVerificationProvider_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationprovider"

oceancdverificationprovider.OceancdVerificationProvider_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationprovider"

oceancdverificationprovider.OceancdVerificationProvider_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationprovider"

oceancdverificationprovider.OceancdVerificationProvider_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a OceancdVerificationProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OceancdVerificationProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OceancdVerificationProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.0/docs/resources/oceancd_verification_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the OceancdVerificationProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.cloudWatch">CloudWatch</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference">OceancdVerificationProviderCloudWatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.datadog">Datadog</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference">OceancdVerificationProviderDatadogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.jenkins">Jenkins</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference">OceancdVerificationProviderJenkinsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.newRelic">NewRelic</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference">OceancdVerificationProviderNewRelicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.prometheus">Prometheus</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference">OceancdVerificationProviderPrometheusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.cloudWatchInput">CloudWatchInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatch">OceancdVerificationProviderCloudWatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.clusterIdsInput">ClusterIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.datadogInput">DatadogInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadog">OceancdVerificationProviderDatadog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.jenkinsInput">JenkinsInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkins">OceancdVerificationProviderJenkins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.newRelicInput">NewRelicInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic">OceancdVerificationProviderNewRelic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.prometheusInput">PrometheusInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheus">OceancdVerificationProviderPrometheus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.clusterIds">ClusterIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CloudWatch`<sup>Required</sup> <a name="CloudWatch" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.cloudWatch"></a>

```go
func CloudWatch() OceancdVerificationProviderCloudWatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference">OceancdVerificationProviderCloudWatchOutputReference</a>

---

##### `Datadog`<sup>Required</sup> <a name="Datadog" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.datadog"></a>

```go
func Datadog() OceancdVerificationProviderDatadogOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference">OceancdVerificationProviderDatadogOutputReference</a>

---

##### `Jenkins`<sup>Required</sup> <a name="Jenkins" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.jenkins"></a>

```go
func Jenkins() OceancdVerificationProviderJenkinsOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference">OceancdVerificationProviderJenkinsOutputReference</a>

---

##### `NewRelic`<sup>Required</sup> <a name="NewRelic" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.newRelic"></a>

```go
func NewRelic() OceancdVerificationProviderNewRelicOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference">OceancdVerificationProviderNewRelicOutputReference</a>

---

##### `Prometheus`<sup>Required</sup> <a name="Prometheus" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.prometheus"></a>

```go
func Prometheus() OceancdVerificationProviderPrometheusOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference">OceancdVerificationProviderPrometheusOutputReference</a>

---

##### `CloudWatchInput`<sup>Optional</sup> <a name="CloudWatchInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.cloudWatchInput"></a>

```go
func CloudWatchInput() OceancdVerificationProviderCloudWatch
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatch">OceancdVerificationProviderCloudWatch</a>

---

##### `ClusterIdsInput`<sup>Optional</sup> <a name="ClusterIdsInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.clusterIdsInput"></a>

```go
func ClusterIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DatadogInput`<sup>Optional</sup> <a name="DatadogInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.datadogInput"></a>

```go
func DatadogInput() OceancdVerificationProviderDatadog
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadog">OceancdVerificationProviderDatadog</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `JenkinsInput`<sup>Optional</sup> <a name="JenkinsInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.jenkinsInput"></a>

```go
func JenkinsInput() OceancdVerificationProviderJenkins
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkins">OceancdVerificationProviderJenkins</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NewRelicInput`<sup>Optional</sup> <a name="NewRelicInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.newRelicInput"></a>

```go
func NewRelicInput() OceancdVerificationProviderNewRelic
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic">OceancdVerificationProviderNewRelic</a>

---

##### `PrometheusInput`<sup>Optional</sup> <a name="PrometheusInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.prometheusInput"></a>

```go
func PrometheusInput() OceancdVerificationProviderPrometheus
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheus">OceancdVerificationProviderPrometheus</a>

---

##### `ClusterIds`<sup>Required</sup> <a name="ClusterIds" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.clusterIds"></a>

```go
func ClusterIds() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OceancdVerificationProviderCloudWatch <a name="OceancdVerificationProviderCloudWatch" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatch.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationprovider"

&oceancdverificationprovider.OceancdVerificationProviderCloudWatch {
	IamArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatch.property.iamArn">IamArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.0/docs/resources/oceancd_verification_provider#iam_arn OceancdVerificationProvider#iam_arn}. |

---

##### `IamArn`<sup>Required</sup> <a name="IamArn" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatch.property.iamArn"></a>

```go
IamArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.0/docs/resources/oceancd_verification_provider#iam_arn OceancdVerificationProvider#iam_arn}.

---

### OceancdVerificationProviderConfig <a name="OceancdVerificationProviderConfig" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationprovider"

&oceancdverificationprovider.OceancdVerificationProviderConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClusterIds: *[]*string,
	Name: *string,
	CloudWatch: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatch,
	Datadog: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadog,
	Id: *string,
	Jenkins: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkins,
	NewRelic: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic,
	Prometheus: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheus,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.clusterIds">ClusterIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.0/docs/resources/oceancd_verification_provider#cluster_ids OceancdVerificationProvider#cluster_ids}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.0/docs/resources/oceancd_verification_provider#name OceancdVerificationProvider#name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.cloudWatch">CloudWatch</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatch">OceancdVerificationProviderCloudWatch</a></code> | cloud_watch block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.datadog">Datadog</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadog">OceancdVerificationProviderDatadog</a></code> | datadog block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.0/docs/resources/oceancd_verification_provider#id OceancdVerificationProvider#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.jenkins">Jenkins</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkins">OceancdVerificationProviderJenkins</a></code> | jenkins block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.newRelic">NewRelic</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic">OceancdVerificationProviderNewRelic</a></code> | new_relic block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.prometheus">Prometheus</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheus">OceancdVerificationProviderPrometheus</a></code> | prometheus block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterIds`<sup>Required</sup> <a name="ClusterIds" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.clusterIds"></a>

```go
ClusterIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.0/docs/resources/oceancd_verification_provider#cluster_ids OceancdVerificationProvider#cluster_ids}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.0/docs/resources/oceancd_verification_provider#name OceancdVerificationProvider#name}.

---

##### `CloudWatch`<sup>Optional</sup> <a name="CloudWatch" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.cloudWatch"></a>

```go
CloudWatch OceancdVerificationProviderCloudWatch
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatch">OceancdVerificationProviderCloudWatch</a>

cloud_watch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.0/docs/resources/oceancd_verification_provider#cloud_watch OceancdVerificationProvider#cloud_watch}

---

##### `Datadog`<sup>Optional</sup> <a name="Datadog" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.datadog"></a>

```go
Datadog OceancdVerificationProviderDatadog
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadog">OceancdVerificationProviderDatadog</a>

datadog block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.0/docs/resources/oceancd_verification_provider#datadog OceancdVerificationProvider#datadog}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.0/docs/resources/oceancd_verification_provider#id OceancdVerificationProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Jenkins`<sup>Optional</sup> <a name="Jenkins" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.jenkins"></a>

```go
Jenkins OceancdVerificationProviderJenkins
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkins">OceancdVerificationProviderJenkins</a>

jenkins block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.0/docs/resources/oceancd_verification_provider#jenkins OceancdVerificationProvider#jenkins}

---

##### `NewRelic`<sup>Optional</sup> <a name="NewRelic" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.newRelic"></a>

```go
NewRelic OceancdVerificationProviderNewRelic
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic">OceancdVerificationProviderNewRelic</a>

new_relic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.0/docs/resources/oceancd_verification_provider#new_relic OceancdVerificationProvider#new_relic}

---

##### `Prometheus`<sup>Optional</sup> <a name="Prometheus" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.prometheus"></a>

```go
Prometheus OceancdVerificationProviderPrometheus
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheus">OceancdVerificationProviderPrometheus</a>

prometheus block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.0/docs/resources/oceancd_verification_provider#prometheus OceancdVerificationProvider#prometheus}

---

### OceancdVerificationProviderDatadog <a name="OceancdVerificationProviderDatadog" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadog.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationprovider"

&oceancdverificationprovider.OceancdVerificationProviderDatadog {
	Address: *string,
	ApiKey: *string,
	AppKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadog.property.address">Address</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.0/docs/resources/oceancd_verification_provider#address OceancdVerificationProvider#address}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadog.property.apiKey">ApiKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.0/docs/resources/oceancd_verification_provider#api_key OceancdVerificationProvider#api_key}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadog.property.appKey">AppKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.0/docs/resources/oceancd_verification_provider#app_key OceancdVerificationProvider#app_key}. |

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadog.property.address"></a>

```go
Address *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.0/docs/resources/oceancd_verification_provider#address OceancdVerificationProvider#address}.

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadog.property.apiKey"></a>

```go
ApiKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.0/docs/resources/oceancd_verification_provider#api_key OceancdVerificationProvider#api_key}.

---

##### `AppKey`<sup>Required</sup> <a name="AppKey" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadog.property.appKey"></a>

```go
AppKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.0/docs/resources/oceancd_verification_provider#app_key OceancdVerificationProvider#app_key}.

---

### OceancdVerificationProviderJenkins <a name="OceancdVerificationProviderJenkins" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkins"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkins.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationprovider"

&oceancdverificationprovider.OceancdVerificationProviderJenkins {
	ApiToken: *string,
	BaseUrl: *string,
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkins.property.apiToken">ApiToken</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.0/docs/resources/oceancd_verification_provider#api_token OceancdVerificationProvider#api_token}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkins.property.baseUrl">BaseUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.0/docs/resources/oceancd_verification_provider#base_url OceancdVerificationProvider#base_url}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkins.property.username">Username</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.0/docs/resources/oceancd_verification_provider#username OceancdVerificationProvider#username}. |

---

##### `ApiToken`<sup>Required</sup> <a name="ApiToken" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkins.property.apiToken"></a>

```go
ApiToken *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.0/docs/resources/oceancd_verification_provider#api_token OceancdVerificationProvider#api_token}.

---

##### `BaseUrl`<sup>Required</sup> <a name="BaseUrl" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkins.property.baseUrl"></a>

```go
BaseUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.0/docs/resources/oceancd_verification_provider#base_url OceancdVerificationProvider#base_url}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkins.property.username"></a>

```go
Username *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.0/docs/resources/oceancd_verification_provider#username OceancdVerificationProvider#username}.

---

### OceancdVerificationProviderNewRelic <a name="OceancdVerificationProviderNewRelic" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationprovider"

&oceancdverificationprovider.OceancdVerificationProviderNewRelic {
	AccountId: *string,
	PersonalApiKey: *string,
	BaseUrlNerdGraph: *string,
	BaseUrlRest: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.0/docs/resources/oceancd_verification_provider#account_id OceancdVerificationProvider#account_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic.property.personalApiKey">PersonalApiKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.0/docs/resources/oceancd_verification_provider#personal_api_key OceancdVerificationProvider#personal_api_key}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic.property.baseUrlNerdGraph">BaseUrlNerdGraph</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.0/docs/resources/oceancd_verification_provider#base_url_nerd_graph OceancdVerificationProvider#base_url_nerd_graph}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic.property.baseUrlRest">BaseUrlRest</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.0/docs/resources/oceancd_verification_provider#base_url_rest OceancdVerificationProvider#base_url_rest}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.0/docs/resources/oceancd_verification_provider#region OceancdVerificationProvider#region}. |

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.0/docs/resources/oceancd_verification_provider#account_id OceancdVerificationProvider#account_id}.

---

##### `PersonalApiKey`<sup>Required</sup> <a name="PersonalApiKey" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic.property.personalApiKey"></a>

```go
PersonalApiKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.0/docs/resources/oceancd_verification_provider#personal_api_key OceancdVerificationProvider#personal_api_key}.

---

##### `BaseUrlNerdGraph`<sup>Optional</sup> <a name="BaseUrlNerdGraph" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic.property.baseUrlNerdGraph"></a>

```go
BaseUrlNerdGraph *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.0/docs/resources/oceancd_verification_provider#base_url_nerd_graph OceancdVerificationProvider#base_url_nerd_graph}.

---

##### `BaseUrlRest`<sup>Optional</sup> <a name="BaseUrlRest" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic.property.baseUrlRest"></a>

```go
BaseUrlRest *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.0/docs/resources/oceancd_verification_provider#base_url_rest OceancdVerificationProvider#base_url_rest}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.0/docs/resources/oceancd_verification_provider#region OceancdVerificationProvider#region}.

---

### OceancdVerificationProviderPrometheus <a name="OceancdVerificationProviderPrometheus" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheus.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationprovider"

&oceancdverificationprovider.OceancdVerificationProviderPrometheus {
	Address: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheus.property.address">Address</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.0/docs/resources/oceancd_verification_provider#address OceancdVerificationProvider#address}. |

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheus.property.address"></a>

```go
Address *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.0/docs/resources/oceancd_verification_provider#address OceancdVerificationProvider#address}.

---

## Classes <a name="Classes" id="Classes"></a>

### OceancdVerificationProviderCloudWatchOutputReference <a name="OceancdVerificationProviderCloudWatchOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationprovider"

oceancdverificationprovider.NewOceancdVerificationProviderCloudWatchOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceancdVerificationProviderCloudWatchOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.property.iamArnInput">IamArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.property.iamArn">IamArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatch">OceancdVerificationProviderCloudWatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IamArnInput`<sup>Optional</sup> <a name="IamArnInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.property.iamArnInput"></a>

```go
func IamArnInput() *string
```

- *Type:* *string

---

##### `IamArn`<sup>Required</sup> <a name="IamArn" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.property.iamArn"></a>

```go
func IamArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.property.internalValue"></a>

```go
func InternalValue() OceancdVerificationProviderCloudWatch
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatch">OceancdVerificationProviderCloudWatch</a>

---


### OceancdVerificationProviderDatadogOutputReference <a name="OceancdVerificationProviderDatadogOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationprovider"

oceancdverificationprovider.NewOceancdVerificationProviderDatadogOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceancdVerificationProviderDatadogOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.property.addressInput">AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.property.apiKeyInput">ApiKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.property.appKeyInput">AppKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.property.apiKey">ApiKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.property.appKey">AppKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadog">OceancdVerificationProviderDatadog</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.property.addressInput"></a>

```go
func AddressInput() *string
```

- *Type:* *string

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.property.apiKeyInput"></a>

```go
func ApiKeyInput() *string
```

- *Type:* *string

---

##### `AppKeyInput`<sup>Optional</sup> <a name="AppKeyInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.property.appKeyInput"></a>

```go
func AppKeyInput() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.property.apiKey"></a>

```go
func ApiKey() *string
```

- *Type:* *string

---

##### `AppKey`<sup>Required</sup> <a name="AppKey" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.property.appKey"></a>

```go
func AppKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.property.internalValue"></a>

```go
func InternalValue() OceancdVerificationProviderDatadog
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadog">OceancdVerificationProviderDatadog</a>

---


### OceancdVerificationProviderJenkinsOutputReference <a name="OceancdVerificationProviderJenkinsOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationprovider"

oceancdverificationprovider.NewOceancdVerificationProviderJenkinsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceancdVerificationProviderJenkinsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.property.apiTokenInput">ApiTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.property.baseUrlInput">BaseUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.property.apiToken">ApiToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.property.baseUrl">BaseUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkins">OceancdVerificationProviderJenkins</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiTokenInput`<sup>Optional</sup> <a name="ApiTokenInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.property.apiTokenInput"></a>

```go
func ApiTokenInput() *string
```

- *Type:* *string

---

##### `BaseUrlInput`<sup>Optional</sup> <a name="BaseUrlInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.property.baseUrlInput"></a>

```go
func BaseUrlInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `ApiToken`<sup>Required</sup> <a name="ApiToken" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.property.apiToken"></a>

```go
func ApiToken() *string
```

- *Type:* *string

---

##### `BaseUrl`<sup>Required</sup> <a name="BaseUrl" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.property.baseUrl"></a>

```go
func BaseUrl() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.property.internalValue"></a>

```go
func InternalValue() OceancdVerificationProviderJenkins
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkins">OceancdVerificationProviderJenkins</a>

---


### OceancdVerificationProviderNewRelicOutputReference <a name="OceancdVerificationProviderNewRelicOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationprovider"

oceancdverificationprovider.NewOceancdVerificationProviderNewRelicOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceancdVerificationProviderNewRelicOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.resetBaseUrlNerdGraph">ResetBaseUrlNerdGraph</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.resetBaseUrlRest">ResetBaseUrlRest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBaseUrlNerdGraph` <a name="ResetBaseUrlNerdGraph" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.resetBaseUrlNerdGraph"></a>

```go
func ResetBaseUrlNerdGraph()
```

##### `ResetBaseUrlRest` <a name="ResetBaseUrlRest" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.resetBaseUrlRest"></a>

```go
func ResetBaseUrlRest()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.resetRegion"></a>

```go
func ResetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.baseUrlNerdGraphInput">BaseUrlNerdGraphInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.baseUrlRestInput">BaseUrlRestInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.personalApiKeyInput">PersonalApiKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.baseUrlNerdGraph">BaseUrlNerdGraph</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.baseUrlRest">BaseUrlRest</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.personalApiKey">PersonalApiKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic">OceancdVerificationProviderNewRelic</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `BaseUrlNerdGraphInput`<sup>Optional</sup> <a name="BaseUrlNerdGraphInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.baseUrlNerdGraphInput"></a>

```go
func BaseUrlNerdGraphInput() *string
```

- *Type:* *string

---

##### `BaseUrlRestInput`<sup>Optional</sup> <a name="BaseUrlRestInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.baseUrlRestInput"></a>

```go
func BaseUrlRestInput() *string
```

- *Type:* *string

---

##### `PersonalApiKeyInput`<sup>Optional</sup> <a name="PersonalApiKeyInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.personalApiKeyInput"></a>

```go
func PersonalApiKeyInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `BaseUrlNerdGraph`<sup>Required</sup> <a name="BaseUrlNerdGraph" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.baseUrlNerdGraph"></a>

```go
func BaseUrlNerdGraph() *string
```

- *Type:* *string

---

##### `BaseUrlRest`<sup>Required</sup> <a name="BaseUrlRest" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.baseUrlRest"></a>

```go
func BaseUrlRest() *string
```

- *Type:* *string

---

##### `PersonalApiKey`<sup>Required</sup> <a name="PersonalApiKey" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.personalApiKey"></a>

```go
func PersonalApiKey() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.internalValue"></a>

```go
func InternalValue() OceancdVerificationProviderNewRelic
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic">OceancdVerificationProviderNewRelic</a>

---


### OceancdVerificationProviderPrometheusOutputReference <a name="OceancdVerificationProviderPrometheusOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationprovider"

oceancdverificationprovider.NewOceancdVerificationProviderPrometheusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceancdVerificationProviderPrometheusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.property.addressInput">AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheus">OceancdVerificationProviderPrometheus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.property.addressInput"></a>

```go
func AddressInput() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.property.internalValue"></a>

```go
func InternalValue() OceancdVerificationProviderPrometheus
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheus">OceancdVerificationProviderPrometheus</a>

---



