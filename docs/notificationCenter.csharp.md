# `notificationCenter` Submodule <a name="`notificationCenter` Submodule" id="@cdktf/provider-spotinst.notificationCenter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NotificationCenter <a name="NotificationCenter" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.227.0/docs/resources/notification_center spotinst_notification_center}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new NotificationCenter(Construct Scope, string Id, NotificationCenterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig">NotificationCenterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig">NotificationCenterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.putComputePolicyConfig">PutComputePolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.putRegisteredUsers">PutRegisteredUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.putSubscriptions">PutSubscriptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.resetIsActive">ResetIsActive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.resetRegisteredUsers">ResetRegisteredUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.resetSubscriptions">ResetSubscriptions</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutComputePolicyConfig` <a name="PutComputePolicyConfig" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.putComputePolicyConfig"></a>

```csharp
private void PutComputePolicyConfig(NotificationCenterComputePolicyConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.putComputePolicyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig">NotificationCenterComputePolicyConfig</a>

---

##### `PutRegisteredUsers` <a name="PutRegisteredUsers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.putRegisteredUsers"></a>

```csharp
private void PutRegisteredUsers(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.putRegisteredUsers.parameter.value"></a>

- *Type:* object

---

##### `PutSubscriptions` <a name="PutSubscriptions" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.putSubscriptions"></a>

```csharp
private void PutSubscriptions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.putSubscriptions.parameter.value"></a>

- *Type:* object

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsActive` <a name="ResetIsActive" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.resetIsActive"></a>

```csharp
private void ResetIsActive()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetRegisteredUsers` <a name="ResetRegisteredUsers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.resetRegisteredUsers"></a>

```csharp
private void ResetRegisteredUsers()
```

##### `ResetSubscriptions` <a name="ResetSubscriptions" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.resetSubscriptions"></a>

```csharp
private void ResetSubscriptions()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NotificationCenter resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

NotificationCenter.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

NotificationCenter.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

NotificationCenter.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

NotificationCenter.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a NotificationCenter resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NotificationCenter to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NotificationCenter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.227.0/docs/resources/notification_center#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the NotificationCenter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.computePolicyConfig">ComputePolicyConfig</a></code> | <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference">NotificationCenterComputePolicyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.registeredUsers">RegisteredUsers</a></code> | <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList">NotificationCenterRegisteredUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.subscriptions">Subscriptions</a></code> | <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList">NotificationCenterSubscriptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.computePolicyConfigInput">ComputePolicyConfigInput</a></code> | <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig">NotificationCenterComputePolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.isActiveInput">IsActiveInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.privacyLevelInput">PrivacyLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.registeredUsersInput">RegisteredUsersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.subscriptionsInput">SubscriptionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.isActive">IsActive</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.privacyLevel">PrivacyLevel</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ComputePolicyConfig`<sup>Required</sup> <a name="ComputePolicyConfig" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.computePolicyConfig"></a>

```csharp
public NotificationCenterComputePolicyConfigOutputReference ComputePolicyConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference">NotificationCenterComputePolicyConfigOutputReference</a>

---

##### `RegisteredUsers`<sup>Required</sup> <a name="RegisteredUsers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.registeredUsers"></a>

```csharp
public NotificationCenterRegisteredUsersList RegisteredUsers { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList">NotificationCenterRegisteredUsersList</a>

---

##### `Subscriptions`<sup>Required</sup> <a name="Subscriptions" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.subscriptions"></a>

```csharp
public NotificationCenterSubscriptionsList Subscriptions { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList">NotificationCenterSubscriptionsList</a>

---

##### `ComputePolicyConfigInput`<sup>Optional</sup> <a name="ComputePolicyConfigInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.computePolicyConfigInput"></a>

```csharp
public NotificationCenterComputePolicyConfig ComputePolicyConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig">NotificationCenterComputePolicyConfig</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsActiveInput`<sup>Optional</sup> <a name="IsActiveInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.isActiveInput"></a>

```csharp
public object IsActiveInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PrivacyLevelInput`<sup>Optional</sup> <a name="PrivacyLevelInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.privacyLevelInput"></a>

```csharp
public string PrivacyLevelInput { get; }
```

- *Type:* string

---

##### `RegisteredUsersInput`<sup>Optional</sup> <a name="RegisteredUsersInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.registeredUsersInput"></a>

```csharp
public object RegisteredUsersInput { get; }
```

- *Type:* object

---

##### `SubscriptionsInput`<sup>Optional</sup> <a name="SubscriptionsInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.subscriptionsInput"></a>

```csharp
public object SubscriptionsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsActive`<sup>Required</sup> <a name="IsActive" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.isActive"></a>

```csharp
public object IsActive { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PrivacyLevel`<sup>Required</sup> <a name="PrivacyLevel" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.privacyLevel"></a>

```csharp
public string PrivacyLevel { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NotificationCenterComputePolicyConfig <a name="NotificationCenterComputePolicyConfig" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new NotificationCenterComputePolicyConfig {
    object Events,
    object DynamicRules = null,
    string[] ResourceIds = null,
    object ShouldIncludeAllResources = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig.property.events">Events</a></code> | <code>object</code> | events block. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig.property.dynamicRules">DynamicRules</a></code> | <code>object</code> | dynamic_rules block. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig.property.resourceIds">ResourceIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.227.0/docs/resources/notification_center#resource_ids NotificationCenter#resource_ids}. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig.property.shouldIncludeAllResources">ShouldIncludeAllResources</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.227.0/docs/resources/notification_center#should_include_all_resources NotificationCenter#should_include_all_resources}. |

---

##### `Events`<sup>Required</sup> <a name="Events" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig.property.events"></a>

```csharp
public object Events { get; set; }
```

- *Type:* object

events block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.227.0/docs/resources/notification_center#events NotificationCenter#events}

---

##### `DynamicRules`<sup>Optional</sup> <a name="DynamicRules" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig.property.dynamicRules"></a>

```csharp
public object DynamicRules { get; set; }
```

- *Type:* object

dynamic_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.227.0/docs/resources/notification_center#dynamic_rules NotificationCenter#dynamic_rules}

---

##### `ResourceIds`<sup>Optional</sup> <a name="ResourceIds" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig.property.resourceIds"></a>

```csharp
public string[] ResourceIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.227.0/docs/resources/notification_center#resource_ids NotificationCenter#resource_ids}.

---

##### `ShouldIncludeAllResources`<sup>Optional</sup> <a name="ShouldIncludeAllResources" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig.property.shouldIncludeAllResources"></a>

```csharp
public object ShouldIncludeAllResources { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.227.0/docs/resources/notification_center#should_include_all_resources NotificationCenter#should_include_all_resources}.

---

### NotificationCenterComputePolicyConfigDynamicRules <a name="NotificationCenterComputePolicyConfigDynamicRules" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new NotificationCenterComputePolicyConfigDynamicRules {
    object FilterConditions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRules.property.filterConditions">FilterConditions</a></code> | <code>object</code> | filter_conditions block. |

---

##### `FilterConditions`<sup>Optional</sup> <a name="FilterConditions" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRules.property.filterConditions"></a>

```csharp
public object FilterConditions { get; set; }
```

- *Type:* object

filter_conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.227.0/docs/resources/notification_center#filter_conditions NotificationCenter#filter_conditions}

---

### NotificationCenterComputePolicyConfigDynamicRulesFilterConditions <a name="NotificationCenterComputePolicyConfigDynamicRulesFilterConditions" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new NotificationCenterComputePolicyConfigDynamicRulesFilterConditions {
    string Expression = null,
    string Identifier = null,
    string Operator = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditions.property.expression">Expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.227.0/docs/resources/notification_center#expression NotificationCenter#expression}. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditions.property.identifier">Identifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.227.0/docs/resources/notification_center#identifier NotificationCenter#identifier}. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditions.property.operator">Operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.227.0/docs/resources/notification_center#operator NotificationCenter#operator}. |

---

##### `Expression`<sup>Optional</sup> <a name="Expression" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditions.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.227.0/docs/resources/notification_center#expression NotificationCenter#expression}.

---

##### `Identifier`<sup>Optional</sup> <a name="Identifier" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditions.property.identifier"></a>

```csharp
public string Identifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.227.0/docs/resources/notification_center#identifier NotificationCenter#identifier}.

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditions.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.227.0/docs/resources/notification_center#operator NotificationCenter#operator}.

---

### NotificationCenterComputePolicyConfigEvents <a name="NotificationCenterComputePolicyConfigEvents" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEvents"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEvents.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new NotificationCenterComputePolicyConfigEvents {
    string Event = null,
    string EventType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEvents.property.event">Event</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.227.0/docs/resources/notification_center#event NotificationCenter#event}. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEvents.property.eventType">EventType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.227.0/docs/resources/notification_center#event_type NotificationCenter#event_type}. |

---

##### `Event`<sup>Optional</sup> <a name="Event" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEvents.property.event"></a>

```csharp
public string Event { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.227.0/docs/resources/notification_center#event NotificationCenter#event}.

---

##### `EventType`<sup>Optional</sup> <a name="EventType" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEvents.property.eventType"></a>

```csharp
public string EventType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.227.0/docs/resources/notification_center#event_type NotificationCenter#event_type}.

---

### NotificationCenterConfig <a name="NotificationCenterConfig" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new NotificationCenterConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    NotificationCenterComputePolicyConfig ComputePolicyConfig,
    string PrivacyLevel,
    string Description = null,
    string Id = null,
    object IsActive = null,
    string Name = null,
    object RegisteredUsers = null,
    object Subscriptions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.computePolicyConfig">ComputePolicyConfig</a></code> | <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig">NotificationCenterComputePolicyConfig</a></code> | compute_policy_config block. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.privacyLevel">PrivacyLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.227.0/docs/resources/notification_center#privacy_level NotificationCenter#privacy_level}. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.227.0/docs/resources/notification_center#description NotificationCenter#description}. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.227.0/docs/resources/notification_center#id NotificationCenter#id}. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.isActive">IsActive</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.227.0/docs/resources/notification_center#is_active NotificationCenter#is_active}. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.227.0/docs/resources/notification_center#name NotificationCenter#name}. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.registeredUsers">RegisteredUsers</a></code> | <code>object</code> | registered_users block. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.subscriptions">Subscriptions</a></code> | <code>object</code> | subscriptions block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ComputePolicyConfig`<sup>Required</sup> <a name="ComputePolicyConfig" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.computePolicyConfig"></a>

```csharp
public NotificationCenterComputePolicyConfig ComputePolicyConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig">NotificationCenterComputePolicyConfig</a>

compute_policy_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.227.0/docs/resources/notification_center#compute_policy_config NotificationCenter#compute_policy_config}

---

##### `PrivacyLevel`<sup>Required</sup> <a name="PrivacyLevel" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.privacyLevel"></a>

```csharp
public string PrivacyLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.227.0/docs/resources/notification_center#privacy_level NotificationCenter#privacy_level}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.227.0/docs/resources/notification_center#description NotificationCenter#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.227.0/docs/resources/notification_center#id NotificationCenter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsActive`<sup>Optional</sup> <a name="IsActive" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.isActive"></a>

```csharp
public object IsActive { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.227.0/docs/resources/notification_center#is_active NotificationCenter#is_active}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.227.0/docs/resources/notification_center#name NotificationCenter#name}.

---

##### `RegisteredUsers`<sup>Optional</sup> <a name="RegisteredUsers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.registeredUsers"></a>

```csharp
public object RegisteredUsers { get; set; }
```

- *Type:* object

registered_users block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.227.0/docs/resources/notification_center#registered_users NotificationCenter#registered_users}

---

##### `Subscriptions`<sup>Optional</sup> <a name="Subscriptions" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.subscriptions"></a>

```csharp
public object Subscriptions { get; set; }
```

- *Type:* object

subscriptions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.227.0/docs/resources/notification_center#subscriptions NotificationCenter#subscriptions}

---

### NotificationCenterRegisteredUsers <a name="NotificationCenterRegisteredUsers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new NotificationCenterRegisteredUsers {
    string[] SubscriptionTypes = null,
    string UserEmail = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsers.property.subscriptionTypes">SubscriptionTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.227.0/docs/resources/notification_center#subscription_types NotificationCenter#subscription_types}. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsers.property.userEmail">UserEmail</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.227.0/docs/resources/notification_center#user_email NotificationCenter#user_email}. |

---

##### `SubscriptionTypes`<sup>Optional</sup> <a name="SubscriptionTypes" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsers.property.subscriptionTypes"></a>

```csharp
public string[] SubscriptionTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.227.0/docs/resources/notification_center#subscription_types NotificationCenter#subscription_types}.

---

##### `UserEmail`<sup>Optional</sup> <a name="UserEmail" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsers.property.userEmail"></a>

```csharp
public string UserEmail { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.227.0/docs/resources/notification_center#user_email NotificationCenter#user_email}.

---

### NotificationCenterSubscriptions <a name="NotificationCenterSubscriptions" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new NotificationCenterSubscriptions {
    string Endpoint = null,
    string SubscriptionType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptions.property.endpoint">Endpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.227.0/docs/resources/notification_center#endpoint NotificationCenter#endpoint}. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptions.property.subscriptionType">SubscriptionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.227.0/docs/resources/notification_center#subscription_type NotificationCenter#subscription_type}. |

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptions.property.endpoint"></a>

```csharp
public string Endpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.227.0/docs/resources/notification_center#endpoint NotificationCenter#endpoint}.

---

##### `SubscriptionType`<sup>Optional</sup> <a name="SubscriptionType" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptions.property.subscriptionType"></a>

```csharp
public string SubscriptionType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.227.0/docs/resources/notification_center#subscription_type NotificationCenter#subscription_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList <a name="NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.get"></a>

```csharp
private NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference <a name="NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.resetExpression">ResetExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.resetIdentifier">ResetIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExpression` <a name="ResetExpression" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.resetExpression"></a>

```csharp
private void ResetExpression()
```

##### `ResetIdentifier` <a name="ResetIdentifier" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.resetIdentifier"></a>

```csharp
private void ResetIdentifier()
```

##### `ResetOperator` <a name="ResetOperator" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.resetOperator"></a>

```csharp
private void ResetOperator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.identifierInput">IdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.identifier">Identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.identifierInput"></a>

```csharp
public string IdentifierInput { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.identifier"></a>

```csharp
public string Identifier { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NotificationCenterComputePolicyConfigDynamicRulesList <a name="NotificationCenterComputePolicyConfigDynamicRulesList" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new NotificationCenterComputePolicyConfigDynamicRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.get"></a>

```csharp
private NotificationCenterComputePolicyConfigDynamicRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NotificationCenterComputePolicyConfigDynamicRulesOutputReference <a name="NotificationCenterComputePolicyConfigDynamicRulesOutputReference" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new NotificationCenterComputePolicyConfigDynamicRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.putFilterConditions">PutFilterConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.resetFilterConditions">ResetFilterConditions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFilterConditions` <a name="PutFilterConditions" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.putFilterConditions"></a>

```csharp
private void PutFilterConditions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.putFilterConditions.parameter.value"></a>

- *Type:* object

---

##### `ResetFilterConditions` <a name="ResetFilterConditions" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.resetFilterConditions"></a>

```csharp
private void ResetFilterConditions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.property.filterConditions">FilterConditions</a></code> | <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList">NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.property.filterConditionsInput">FilterConditionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FilterConditions`<sup>Required</sup> <a name="FilterConditions" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.property.filterConditions"></a>

```csharp
public NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList FilterConditions { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList">NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList</a>

---

##### `FilterConditionsInput`<sup>Optional</sup> <a name="FilterConditionsInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.property.filterConditionsInput"></a>

```csharp
public object FilterConditionsInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NotificationCenterComputePolicyConfigEventsList <a name="NotificationCenterComputePolicyConfigEventsList" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new NotificationCenterComputePolicyConfigEventsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.get"></a>

```csharp
private NotificationCenterComputePolicyConfigEventsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NotificationCenterComputePolicyConfigEventsOutputReference <a name="NotificationCenterComputePolicyConfigEventsOutputReference" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new NotificationCenterComputePolicyConfigEventsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.resetEvent">ResetEvent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.resetEventType">ResetEventType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEvent` <a name="ResetEvent" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.resetEvent"></a>

```csharp
private void ResetEvent()
```

##### `ResetEventType` <a name="ResetEventType" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.resetEventType"></a>

```csharp
private void ResetEventType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.property.eventInput">EventInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.property.eventTypeInput">EventTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.property.event">Event</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.property.eventType">EventType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EventInput`<sup>Optional</sup> <a name="EventInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.property.eventInput"></a>

```csharp
public string EventInput { get; }
```

- *Type:* string

---

##### `EventTypeInput`<sup>Optional</sup> <a name="EventTypeInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.property.eventTypeInput"></a>

```csharp
public string EventTypeInput { get; }
```

- *Type:* string

---

##### `Event`<sup>Required</sup> <a name="Event" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.property.event"></a>

```csharp
public string Event { get; }
```

- *Type:* string

---

##### `EventType`<sup>Required</sup> <a name="EventType" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.property.eventType"></a>

```csharp
public string EventType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NotificationCenterComputePolicyConfigOutputReference <a name="NotificationCenterComputePolicyConfigOutputReference" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new NotificationCenterComputePolicyConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.putDynamicRules">PutDynamicRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.putEvents">PutEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.resetDynamicRules">ResetDynamicRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.resetResourceIds">ResetResourceIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.resetShouldIncludeAllResources">ResetShouldIncludeAllResources</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDynamicRules` <a name="PutDynamicRules" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.putDynamicRules"></a>

```csharp
private void PutDynamicRules(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.putDynamicRules.parameter.value"></a>

- *Type:* object

---

##### `PutEvents` <a name="PutEvents" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.putEvents"></a>

```csharp
private void PutEvents(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.putEvents.parameter.value"></a>

- *Type:* object

---

##### `ResetDynamicRules` <a name="ResetDynamicRules" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.resetDynamicRules"></a>

```csharp
private void ResetDynamicRules()
```

##### `ResetResourceIds` <a name="ResetResourceIds" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.resetResourceIds"></a>

```csharp
private void ResetResourceIds()
```

##### `ResetShouldIncludeAllResources` <a name="ResetShouldIncludeAllResources" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.resetShouldIncludeAllResources"></a>

```csharp
private void ResetShouldIncludeAllResources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.dynamicRules">DynamicRules</a></code> | <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList">NotificationCenterComputePolicyConfigDynamicRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.events">Events</a></code> | <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList">NotificationCenterComputePolicyConfigEventsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.dynamicRulesInput">DynamicRulesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.eventsInput">EventsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.resourceIdsInput">ResourceIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.shouldIncludeAllResourcesInput">ShouldIncludeAllResourcesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.resourceIds">ResourceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.shouldIncludeAllResources">ShouldIncludeAllResources</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig">NotificationCenterComputePolicyConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DynamicRules`<sup>Required</sup> <a name="DynamicRules" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.dynamicRules"></a>

```csharp
public NotificationCenterComputePolicyConfigDynamicRulesList DynamicRules { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList">NotificationCenterComputePolicyConfigDynamicRulesList</a>

---

##### `Events`<sup>Required</sup> <a name="Events" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.events"></a>

```csharp
public NotificationCenterComputePolicyConfigEventsList Events { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList">NotificationCenterComputePolicyConfigEventsList</a>

---

##### `DynamicRulesInput`<sup>Optional</sup> <a name="DynamicRulesInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.dynamicRulesInput"></a>

```csharp
public object DynamicRulesInput { get; }
```

- *Type:* object

---

##### `EventsInput`<sup>Optional</sup> <a name="EventsInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.eventsInput"></a>

```csharp
public object EventsInput { get; }
```

- *Type:* object

---

##### `ResourceIdsInput`<sup>Optional</sup> <a name="ResourceIdsInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.resourceIdsInput"></a>

```csharp
public string[] ResourceIdsInput { get; }
```

- *Type:* string[]

---

##### `ShouldIncludeAllResourcesInput`<sup>Optional</sup> <a name="ShouldIncludeAllResourcesInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.shouldIncludeAllResourcesInput"></a>

```csharp
public object ShouldIncludeAllResourcesInput { get; }
```

- *Type:* object

---

##### `ResourceIds`<sup>Required</sup> <a name="ResourceIds" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.resourceIds"></a>

```csharp
public string[] ResourceIds { get; }
```

- *Type:* string[]

---

##### `ShouldIncludeAllResources`<sup>Required</sup> <a name="ShouldIncludeAllResources" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.shouldIncludeAllResources"></a>

```csharp
public object ShouldIncludeAllResources { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.internalValue"></a>

```csharp
public NotificationCenterComputePolicyConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig">NotificationCenterComputePolicyConfig</a>

---


### NotificationCenterRegisteredUsersList <a name="NotificationCenterRegisteredUsersList" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new NotificationCenterRegisteredUsersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.get"></a>

```csharp
private NotificationCenterRegisteredUsersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NotificationCenterRegisteredUsersOutputReference <a name="NotificationCenterRegisteredUsersOutputReference" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new NotificationCenterRegisteredUsersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.resetSubscriptionTypes">ResetSubscriptionTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.resetUserEmail">ResetUserEmail</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSubscriptionTypes` <a name="ResetSubscriptionTypes" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.resetSubscriptionTypes"></a>

```csharp
private void ResetSubscriptionTypes()
```

##### `ResetUserEmail` <a name="ResetUserEmail" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.resetUserEmail"></a>

```csharp
private void ResetUserEmail()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.property.subscriptionTypesInput">SubscriptionTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.property.userEmailInput">UserEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.property.subscriptionTypes">SubscriptionTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.property.userEmail">UserEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SubscriptionTypesInput`<sup>Optional</sup> <a name="SubscriptionTypesInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.property.subscriptionTypesInput"></a>

```csharp
public string[] SubscriptionTypesInput { get; }
```

- *Type:* string[]

---

##### `UserEmailInput`<sup>Optional</sup> <a name="UserEmailInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.property.userEmailInput"></a>

```csharp
public string UserEmailInput { get; }
```

- *Type:* string

---

##### `SubscriptionTypes`<sup>Required</sup> <a name="SubscriptionTypes" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.property.subscriptionTypes"></a>

```csharp
public string[] SubscriptionTypes { get; }
```

- *Type:* string[]

---

##### `UserEmail`<sup>Required</sup> <a name="UserEmail" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.property.userEmail"></a>

```csharp
public string UserEmail { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NotificationCenterSubscriptionsList <a name="NotificationCenterSubscriptionsList" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new NotificationCenterSubscriptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.get"></a>

```csharp
private NotificationCenterSubscriptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NotificationCenterSubscriptionsOutputReference <a name="NotificationCenterSubscriptionsOutputReference" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new NotificationCenterSubscriptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.resetEndpoint">ResetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.resetSubscriptionType">ResetSubscriptionType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndpoint` <a name="ResetEndpoint" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.resetEndpoint"></a>

```csharp
private void ResetEndpoint()
```

##### `ResetSubscriptionType` <a name="ResetSubscriptionType" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.resetSubscriptionType"></a>

```csharp
private void ResetSubscriptionType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.property.endpointInput">EndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.property.subscriptionTypeInput">SubscriptionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.property.subscriptionType">SubscriptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.property.endpointInput"></a>

```csharp
public string EndpointInput { get; }
```

- *Type:* string

---

##### `SubscriptionTypeInput`<sup>Optional</sup> <a name="SubscriptionTypeInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.property.subscriptionTypeInput"></a>

```csharp
public string SubscriptionTypeInput { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `SubscriptionType`<sup>Required</sup> <a name="SubscriptionType" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.property.subscriptionType"></a>

```csharp
public string SubscriptionType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



