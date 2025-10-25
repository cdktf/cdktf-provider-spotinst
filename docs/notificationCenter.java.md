# `notificationCenter` Submodule <a name="`notificationCenter` Submodule" id="@cdktf/provider-spotinst.notificationCenter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NotificationCenter <a name="NotificationCenter" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.229.0/docs/resources/notification_center spotinst_notification_center}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.notification_center.NotificationCenter;

NotificationCenter.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .computePolicyConfig(NotificationCenterComputePolicyConfig)
    .privacyLevel(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .isActive(java.lang.Boolean|IResolvable)
//  .name(java.lang.String)
//  .registeredUsers(IResolvable|java.util.List<NotificationCenterRegisteredUsers>)
//  .subscriptions(IResolvable|java.util.List<NotificationCenterSubscriptions>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.computePolicyConfig">computePolicyConfig</a></code> | <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig">NotificationCenterComputePolicyConfig</a></code> | compute_policy_config block. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.privacyLevel">privacyLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.229.0/docs/resources/notification_center#privacy_level NotificationCenter#privacy_level}. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.229.0/docs/resources/notification_center#description NotificationCenter#description}. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.229.0/docs/resources/notification_center#id NotificationCenter#id}. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.isActive">isActive</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.229.0/docs/resources/notification_center#is_active NotificationCenter#is_active}. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.229.0/docs/resources/notification_center#name NotificationCenter#name}. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.registeredUsers">registeredUsers</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsers">NotificationCenterRegisteredUsers</a>></code> | registered_users block. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.subscriptions">subscriptions</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptions">NotificationCenterSubscriptions</a>></code> | subscriptions block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `computePolicyConfig`<sup>Required</sup> <a name="computePolicyConfig" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.computePolicyConfig"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig">NotificationCenterComputePolicyConfig</a>

compute_policy_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.229.0/docs/resources/notification_center#compute_policy_config NotificationCenter#compute_policy_config}

---

##### `privacyLevel`<sup>Required</sup> <a name="privacyLevel" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.privacyLevel"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.229.0/docs/resources/notification_center#privacy_level NotificationCenter#privacy_level}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.229.0/docs/resources/notification_center#description NotificationCenter#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.229.0/docs/resources/notification_center#id NotificationCenter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isActive`<sup>Optional</sup> <a name="isActive" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.isActive"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.229.0/docs/resources/notification_center#is_active NotificationCenter#is_active}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.229.0/docs/resources/notification_center#name NotificationCenter#name}.

---

##### `registeredUsers`<sup>Optional</sup> <a name="registeredUsers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.registeredUsers"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsers">NotificationCenterRegisteredUsers</a>>

registered_users block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.229.0/docs/resources/notification_center#registered_users NotificationCenter#registered_users}

---

##### `subscriptions`<sup>Optional</sup> <a name="subscriptions" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.subscriptions"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptions">NotificationCenterSubscriptions</a>>

subscriptions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.229.0/docs/resources/notification_center#subscriptions NotificationCenter#subscriptions}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.putComputePolicyConfig">putComputePolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.putRegisteredUsers">putRegisteredUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.putSubscriptions">putSubscriptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.resetIsActive">resetIsActive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.resetRegisteredUsers">resetRegisteredUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.resetSubscriptions">resetSubscriptions</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putComputePolicyConfig` <a name="putComputePolicyConfig" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.putComputePolicyConfig"></a>

```java
public void putComputePolicyConfig(NotificationCenterComputePolicyConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.putComputePolicyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig">NotificationCenterComputePolicyConfig</a>

---

##### `putRegisteredUsers` <a name="putRegisteredUsers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.putRegisteredUsers"></a>

```java
public void putRegisteredUsers(IResolvable|java.util.List<NotificationCenterRegisteredUsers> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.putRegisteredUsers.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsers">NotificationCenterRegisteredUsers</a>>

---

##### `putSubscriptions` <a name="putSubscriptions" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.putSubscriptions"></a>

```java
public void putSubscriptions(IResolvable|java.util.List<NotificationCenterSubscriptions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.putSubscriptions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptions">NotificationCenterSubscriptions</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.resetId"></a>

```java
public void resetId()
```

##### `resetIsActive` <a name="resetIsActive" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.resetIsActive"></a>

```java
public void resetIsActive()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.resetName"></a>

```java
public void resetName()
```

##### `resetRegisteredUsers` <a name="resetRegisteredUsers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.resetRegisteredUsers"></a>

```java
public void resetRegisteredUsers()
```

##### `resetSubscriptions` <a name="resetSubscriptions" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.resetSubscriptions"></a>

```java
public void resetSubscriptions()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NotificationCenter resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.notification_center.NotificationCenter;

NotificationCenter.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.notification_center.NotificationCenter;

NotificationCenter.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.notification_center.NotificationCenter;

NotificationCenter.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.notification_center.NotificationCenter;

NotificationCenter.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NotificationCenter.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a NotificationCenter resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NotificationCenter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NotificationCenter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.229.0/docs/resources/notification_center#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the NotificationCenter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.computePolicyConfig">computePolicyConfig</a></code> | <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference">NotificationCenterComputePolicyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.registeredUsers">registeredUsers</a></code> | <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList">NotificationCenterRegisteredUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.subscriptions">subscriptions</a></code> | <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList">NotificationCenterSubscriptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.computePolicyConfigInput">computePolicyConfigInput</a></code> | <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig">NotificationCenterComputePolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.isActiveInput">isActiveInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.privacyLevelInput">privacyLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.registeredUsersInput">registeredUsersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsers">NotificationCenterRegisteredUsers</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.subscriptionsInput">subscriptionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptions">NotificationCenterSubscriptions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.isActive">isActive</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.privacyLevel">privacyLevel</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `computePolicyConfig`<sup>Required</sup> <a name="computePolicyConfig" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.computePolicyConfig"></a>

```java
public NotificationCenterComputePolicyConfigOutputReference getComputePolicyConfig();
```

- *Type:* <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference">NotificationCenterComputePolicyConfigOutputReference</a>

---

##### `registeredUsers`<sup>Required</sup> <a name="registeredUsers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.registeredUsers"></a>

```java
public NotificationCenterRegisteredUsersList getRegisteredUsers();
```

- *Type:* <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList">NotificationCenterRegisteredUsersList</a>

---

##### `subscriptions`<sup>Required</sup> <a name="subscriptions" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.subscriptions"></a>

```java
public NotificationCenterSubscriptionsList getSubscriptions();
```

- *Type:* <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList">NotificationCenterSubscriptionsList</a>

---

##### `computePolicyConfigInput`<sup>Optional</sup> <a name="computePolicyConfigInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.computePolicyConfigInput"></a>

```java
public NotificationCenterComputePolicyConfig getComputePolicyConfigInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig">NotificationCenterComputePolicyConfig</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isActiveInput`<sup>Optional</sup> <a name="isActiveInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.isActiveInput"></a>

```java
public java.lang.Boolean|IResolvable getIsActiveInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `privacyLevelInput`<sup>Optional</sup> <a name="privacyLevelInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.privacyLevelInput"></a>

```java
public java.lang.String getPrivacyLevelInput();
```

- *Type:* java.lang.String

---

##### `registeredUsersInput`<sup>Optional</sup> <a name="registeredUsersInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.registeredUsersInput"></a>

```java
public IResolvable|java.util.List<NotificationCenterRegisteredUsers> getRegisteredUsersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsers">NotificationCenterRegisteredUsers</a>>

---

##### `subscriptionsInput`<sup>Optional</sup> <a name="subscriptionsInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.subscriptionsInput"></a>

```java
public IResolvable|java.util.List<NotificationCenterSubscriptions> getSubscriptionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptions">NotificationCenterSubscriptions</a>>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isActive`<sup>Required</sup> <a name="isActive" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.isActive"></a>

```java
public java.lang.Boolean|IResolvable getIsActive();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `privacyLevel`<sup>Required</sup> <a name="privacyLevel" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.privacyLevel"></a>

```java
public java.lang.String getPrivacyLevel();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NotificationCenterComputePolicyConfig <a name="NotificationCenterComputePolicyConfig" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.notification_center.NotificationCenterComputePolicyConfig;

NotificationCenterComputePolicyConfig.builder()
    .events(IResolvable|java.util.List<NotificationCenterComputePolicyConfigEvents>)
//  .dynamicRules(IResolvable|java.util.List<NotificationCenterComputePolicyConfigDynamicRules>)
//  .resourceIds(java.util.List<java.lang.String>)
//  .shouldIncludeAllResources(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig.property.events">events</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEvents">NotificationCenterComputePolicyConfigEvents</a>></code> | events block. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig.property.dynamicRules">dynamicRules</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRules">NotificationCenterComputePolicyConfigDynamicRules</a>></code> | dynamic_rules block. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig.property.resourceIds">resourceIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.229.0/docs/resources/notification_center#resource_ids NotificationCenter#resource_ids}. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig.property.shouldIncludeAllResources">shouldIncludeAllResources</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.229.0/docs/resources/notification_center#should_include_all_resources NotificationCenter#should_include_all_resources}. |

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig.property.events"></a>

```java
public IResolvable|java.util.List<NotificationCenterComputePolicyConfigEvents> getEvents();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEvents">NotificationCenterComputePolicyConfigEvents</a>>

events block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.229.0/docs/resources/notification_center#events NotificationCenter#events}

---

##### `dynamicRules`<sup>Optional</sup> <a name="dynamicRules" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig.property.dynamicRules"></a>

```java
public IResolvable|java.util.List<NotificationCenterComputePolicyConfigDynamicRules> getDynamicRules();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRules">NotificationCenterComputePolicyConfigDynamicRules</a>>

dynamic_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.229.0/docs/resources/notification_center#dynamic_rules NotificationCenter#dynamic_rules}

---

##### `resourceIds`<sup>Optional</sup> <a name="resourceIds" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig.property.resourceIds"></a>

```java
public java.util.List<java.lang.String> getResourceIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.229.0/docs/resources/notification_center#resource_ids NotificationCenter#resource_ids}.

---

##### `shouldIncludeAllResources`<sup>Optional</sup> <a name="shouldIncludeAllResources" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig.property.shouldIncludeAllResources"></a>

```java
public java.lang.Boolean|IResolvable getShouldIncludeAllResources();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.229.0/docs/resources/notification_center#should_include_all_resources NotificationCenter#should_include_all_resources}.

---

### NotificationCenterComputePolicyConfigDynamicRules <a name="NotificationCenterComputePolicyConfigDynamicRules" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.notification_center.NotificationCenterComputePolicyConfigDynamicRules;

NotificationCenterComputePolicyConfigDynamicRules.builder()
//  .filterConditions(IResolvable|java.util.List<NotificationCenterComputePolicyConfigDynamicRulesFilterConditions>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRules.property.filterConditions">filterConditions</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditions">NotificationCenterComputePolicyConfigDynamicRulesFilterConditions</a>></code> | filter_conditions block. |

---

##### `filterConditions`<sup>Optional</sup> <a name="filterConditions" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRules.property.filterConditions"></a>

```java
public IResolvable|java.util.List<NotificationCenterComputePolicyConfigDynamicRulesFilterConditions> getFilterConditions();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditions">NotificationCenterComputePolicyConfigDynamicRulesFilterConditions</a>>

filter_conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.229.0/docs/resources/notification_center#filter_conditions NotificationCenter#filter_conditions}

---

### NotificationCenterComputePolicyConfigDynamicRulesFilterConditions <a name="NotificationCenterComputePolicyConfigDynamicRulesFilterConditions" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.notification_center.NotificationCenterComputePolicyConfigDynamicRulesFilterConditions;

NotificationCenterComputePolicyConfigDynamicRulesFilterConditions.builder()
//  .expression(java.lang.String)
//  .identifier(java.lang.String)
//  .operator(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditions.property.expression">expression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.229.0/docs/resources/notification_center#expression NotificationCenter#expression}. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditions.property.identifier">identifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.229.0/docs/resources/notification_center#identifier NotificationCenter#identifier}. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditions.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.229.0/docs/resources/notification_center#operator NotificationCenter#operator}. |

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditions.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.229.0/docs/resources/notification_center#expression NotificationCenter#expression}.

---

##### `identifier`<sup>Optional</sup> <a name="identifier" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditions.property.identifier"></a>

```java
public java.lang.String getIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.229.0/docs/resources/notification_center#identifier NotificationCenter#identifier}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditions.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.229.0/docs/resources/notification_center#operator NotificationCenter#operator}.

---

### NotificationCenterComputePolicyConfigEvents <a name="NotificationCenterComputePolicyConfigEvents" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEvents"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEvents.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.notification_center.NotificationCenterComputePolicyConfigEvents;

NotificationCenterComputePolicyConfigEvents.builder()
//  .event(java.lang.String)
//  .eventType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEvents.property.event">event</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.229.0/docs/resources/notification_center#event NotificationCenter#event}. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEvents.property.eventType">eventType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.229.0/docs/resources/notification_center#event_type NotificationCenter#event_type}. |

---

##### `event`<sup>Optional</sup> <a name="event" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEvents.property.event"></a>

```java
public java.lang.String getEvent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.229.0/docs/resources/notification_center#event NotificationCenter#event}.

---

##### `eventType`<sup>Optional</sup> <a name="eventType" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEvents.property.eventType"></a>

```java
public java.lang.String getEventType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.229.0/docs/resources/notification_center#event_type NotificationCenter#event_type}.

---

### NotificationCenterConfig <a name="NotificationCenterConfig" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.notification_center.NotificationCenterConfig;

NotificationCenterConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .computePolicyConfig(NotificationCenterComputePolicyConfig)
    .privacyLevel(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .isActive(java.lang.Boolean|IResolvable)
//  .name(java.lang.String)
//  .registeredUsers(IResolvable|java.util.List<NotificationCenterRegisteredUsers>)
//  .subscriptions(IResolvable|java.util.List<NotificationCenterSubscriptions>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.computePolicyConfig">computePolicyConfig</a></code> | <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig">NotificationCenterComputePolicyConfig</a></code> | compute_policy_config block. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.privacyLevel">privacyLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.229.0/docs/resources/notification_center#privacy_level NotificationCenter#privacy_level}. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.229.0/docs/resources/notification_center#description NotificationCenter#description}. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.229.0/docs/resources/notification_center#id NotificationCenter#id}. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.isActive">isActive</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.229.0/docs/resources/notification_center#is_active NotificationCenter#is_active}. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.229.0/docs/resources/notification_center#name NotificationCenter#name}. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.registeredUsers">registeredUsers</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsers">NotificationCenterRegisteredUsers</a>></code> | registered_users block. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.subscriptions">subscriptions</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptions">NotificationCenterSubscriptions</a>></code> | subscriptions block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `computePolicyConfig`<sup>Required</sup> <a name="computePolicyConfig" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.computePolicyConfig"></a>

```java
public NotificationCenterComputePolicyConfig getComputePolicyConfig();
```

- *Type:* <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig">NotificationCenterComputePolicyConfig</a>

compute_policy_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.229.0/docs/resources/notification_center#compute_policy_config NotificationCenter#compute_policy_config}

---

##### `privacyLevel`<sup>Required</sup> <a name="privacyLevel" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.privacyLevel"></a>

```java
public java.lang.String getPrivacyLevel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.229.0/docs/resources/notification_center#privacy_level NotificationCenter#privacy_level}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.229.0/docs/resources/notification_center#description NotificationCenter#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.229.0/docs/resources/notification_center#id NotificationCenter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isActive`<sup>Optional</sup> <a name="isActive" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.isActive"></a>

```java
public java.lang.Boolean|IResolvable getIsActive();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.229.0/docs/resources/notification_center#is_active NotificationCenter#is_active}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.229.0/docs/resources/notification_center#name NotificationCenter#name}.

---

##### `registeredUsers`<sup>Optional</sup> <a name="registeredUsers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.registeredUsers"></a>

```java
public IResolvable|java.util.List<NotificationCenterRegisteredUsers> getRegisteredUsers();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsers">NotificationCenterRegisteredUsers</a>>

registered_users block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.229.0/docs/resources/notification_center#registered_users NotificationCenter#registered_users}

---

##### `subscriptions`<sup>Optional</sup> <a name="subscriptions" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.subscriptions"></a>

```java
public IResolvable|java.util.List<NotificationCenterSubscriptions> getSubscriptions();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptions">NotificationCenterSubscriptions</a>>

subscriptions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.229.0/docs/resources/notification_center#subscriptions NotificationCenter#subscriptions}

---

### NotificationCenterRegisteredUsers <a name="NotificationCenterRegisteredUsers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.notification_center.NotificationCenterRegisteredUsers;

NotificationCenterRegisteredUsers.builder()
//  .subscriptionTypes(java.util.List<java.lang.String>)
//  .userEmail(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsers.property.subscriptionTypes">subscriptionTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.229.0/docs/resources/notification_center#subscription_types NotificationCenter#subscription_types}. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsers.property.userEmail">userEmail</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.229.0/docs/resources/notification_center#user_email NotificationCenter#user_email}. |

---

##### `subscriptionTypes`<sup>Optional</sup> <a name="subscriptionTypes" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsers.property.subscriptionTypes"></a>

```java
public java.util.List<java.lang.String> getSubscriptionTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.229.0/docs/resources/notification_center#subscription_types NotificationCenter#subscription_types}.

---

##### `userEmail`<sup>Optional</sup> <a name="userEmail" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsers.property.userEmail"></a>

```java
public java.lang.String getUserEmail();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.229.0/docs/resources/notification_center#user_email NotificationCenter#user_email}.

---

### NotificationCenterSubscriptions <a name="NotificationCenterSubscriptions" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.notification_center.NotificationCenterSubscriptions;

NotificationCenterSubscriptions.builder()
//  .endpoint(java.lang.String)
//  .subscriptionType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptions.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.229.0/docs/resources/notification_center#endpoint NotificationCenter#endpoint}. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptions.property.subscriptionType">subscriptionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.229.0/docs/resources/notification_center#subscription_type NotificationCenter#subscription_type}. |

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptions.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.229.0/docs/resources/notification_center#endpoint NotificationCenter#endpoint}.

---

##### `subscriptionType`<sup>Optional</sup> <a name="subscriptionType" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptions.property.subscriptionType"></a>

```java
public java.lang.String getSubscriptionType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.229.0/docs/resources/notification_center#subscription_type NotificationCenter#subscription_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList <a name="NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.notification_center.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList;

new NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.get"></a>

```java
public NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditions">NotificationCenterComputePolicyConfigDynamicRulesFilterConditions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<NotificationCenterComputePolicyConfigDynamicRulesFilterConditions> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditions">NotificationCenterComputePolicyConfigDynamicRulesFilterConditions</a>>

---


### NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference <a name="NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.notification_center.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference;

new NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.resetExpression">resetExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.resetIdentifier">resetIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.resetOperator">resetOperator</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExpression` <a name="resetExpression" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.resetExpression"></a>

```java
public void resetExpression()
```

##### `resetIdentifier` <a name="resetIdentifier" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.resetIdentifier"></a>

```java
public void resetIdentifier()
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.resetOperator"></a>

```java
public void resetOperator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.identifierInput">identifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.identifier">identifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditions">NotificationCenterComputePolicyConfigDynamicRulesFilterConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.identifierInput"></a>

```java
public java.lang.String getIdentifierInput();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.identifier"></a>

```java
public java.lang.String getIdentifier();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.internalValue"></a>

```java
public IResolvable|NotificationCenterComputePolicyConfigDynamicRulesFilterConditions getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditions">NotificationCenterComputePolicyConfigDynamicRulesFilterConditions</a>

---


### NotificationCenterComputePolicyConfigDynamicRulesList <a name="NotificationCenterComputePolicyConfigDynamicRulesList" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.notification_center.NotificationCenterComputePolicyConfigDynamicRulesList;

new NotificationCenterComputePolicyConfigDynamicRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.get"></a>

```java
public NotificationCenterComputePolicyConfigDynamicRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRules">NotificationCenterComputePolicyConfigDynamicRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<NotificationCenterComputePolicyConfigDynamicRules> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRules">NotificationCenterComputePolicyConfigDynamicRules</a>>

---


### NotificationCenterComputePolicyConfigDynamicRulesOutputReference <a name="NotificationCenterComputePolicyConfigDynamicRulesOutputReference" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.notification_center.NotificationCenterComputePolicyConfigDynamicRulesOutputReference;

new NotificationCenterComputePolicyConfigDynamicRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.putFilterConditions">putFilterConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.resetFilterConditions">resetFilterConditions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFilterConditions` <a name="putFilterConditions" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.putFilterConditions"></a>

```java
public void putFilterConditions(IResolvable|java.util.List<NotificationCenterComputePolicyConfigDynamicRulesFilterConditions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.putFilterConditions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditions">NotificationCenterComputePolicyConfigDynamicRulesFilterConditions</a>>

---

##### `resetFilterConditions` <a name="resetFilterConditions" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.resetFilterConditions"></a>

```java
public void resetFilterConditions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.property.filterConditions">filterConditions</a></code> | <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList">NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.property.filterConditionsInput">filterConditionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditions">NotificationCenterComputePolicyConfigDynamicRulesFilterConditions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRules">NotificationCenterComputePolicyConfigDynamicRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `filterConditions`<sup>Required</sup> <a name="filterConditions" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.property.filterConditions"></a>

```java
public NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList getFilterConditions();
```

- *Type:* <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList">NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList</a>

---

##### `filterConditionsInput`<sup>Optional</sup> <a name="filterConditionsInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.property.filterConditionsInput"></a>

```java
public IResolvable|java.util.List<NotificationCenterComputePolicyConfigDynamicRulesFilterConditions> getFilterConditionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditions">NotificationCenterComputePolicyConfigDynamicRulesFilterConditions</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.property.internalValue"></a>

```java
public IResolvable|NotificationCenterComputePolicyConfigDynamicRules getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRules">NotificationCenterComputePolicyConfigDynamicRules</a>

---


### NotificationCenterComputePolicyConfigEventsList <a name="NotificationCenterComputePolicyConfigEventsList" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.notification_center.NotificationCenterComputePolicyConfigEventsList;

new NotificationCenterComputePolicyConfigEventsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.get"></a>

```java
public NotificationCenterComputePolicyConfigEventsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEvents">NotificationCenterComputePolicyConfigEvents</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<NotificationCenterComputePolicyConfigEvents> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEvents">NotificationCenterComputePolicyConfigEvents</a>>

---


### NotificationCenterComputePolicyConfigEventsOutputReference <a name="NotificationCenterComputePolicyConfigEventsOutputReference" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.notification_center.NotificationCenterComputePolicyConfigEventsOutputReference;

new NotificationCenterComputePolicyConfigEventsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.resetEvent">resetEvent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.resetEventType">resetEventType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEvent` <a name="resetEvent" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.resetEvent"></a>

```java
public void resetEvent()
```

##### `resetEventType` <a name="resetEventType" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.resetEventType"></a>

```java
public void resetEventType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.property.eventInput">eventInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.property.eventTypeInput">eventTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.property.event">event</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.property.eventType">eventType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEvents">NotificationCenterComputePolicyConfigEvents</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `eventInput`<sup>Optional</sup> <a name="eventInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.property.eventInput"></a>

```java
public java.lang.String getEventInput();
```

- *Type:* java.lang.String

---

##### `eventTypeInput`<sup>Optional</sup> <a name="eventTypeInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.property.eventTypeInput"></a>

```java
public java.lang.String getEventTypeInput();
```

- *Type:* java.lang.String

---

##### `event`<sup>Required</sup> <a name="event" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.property.event"></a>

```java
public java.lang.String getEvent();
```

- *Type:* java.lang.String

---

##### `eventType`<sup>Required</sup> <a name="eventType" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.property.eventType"></a>

```java
public java.lang.String getEventType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.property.internalValue"></a>

```java
public IResolvable|NotificationCenterComputePolicyConfigEvents getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEvents">NotificationCenterComputePolicyConfigEvents</a>

---


### NotificationCenterComputePolicyConfigOutputReference <a name="NotificationCenterComputePolicyConfigOutputReference" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.notification_center.NotificationCenterComputePolicyConfigOutputReference;

new NotificationCenterComputePolicyConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.putDynamicRules">putDynamicRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.putEvents">putEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.resetDynamicRules">resetDynamicRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.resetResourceIds">resetResourceIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.resetShouldIncludeAllResources">resetShouldIncludeAllResources</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDynamicRules` <a name="putDynamicRules" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.putDynamicRules"></a>

```java
public void putDynamicRules(IResolvable|java.util.List<NotificationCenterComputePolicyConfigDynamicRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.putDynamicRules.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRules">NotificationCenterComputePolicyConfigDynamicRules</a>>

---

##### `putEvents` <a name="putEvents" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.putEvents"></a>

```java
public void putEvents(IResolvable|java.util.List<NotificationCenterComputePolicyConfigEvents> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.putEvents.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEvents">NotificationCenterComputePolicyConfigEvents</a>>

---

##### `resetDynamicRules` <a name="resetDynamicRules" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.resetDynamicRules"></a>

```java
public void resetDynamicRules()
```

##### `resetResourceIds` <a name="resetResourceIds" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.resetResourceIds"></a>

```java
public void resetResourceIds()
```

##### `resetShouldIncludeAllResources` <a name="resetShouldIncludeAllResources" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.resetShouldIncludeAllResources"></a>

```java
public void resetShouldIncludeAllResources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.dynamicRules">dynamicRules</a></code> | <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList">NotificationCenterComputePolicyConfigDynamicRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.events">events</a></code> | <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList">NotificationCenterComputePolicyConfigEventsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.dynamicRulesInput">dynamicRulesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRules">NotificationCenterComputePolicyConfigDynamicRules</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.eventsInput">eventsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEvents">NotificationCenterComputePolicyConfigEvents</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.resourceIdsInput">resourceIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.shouldIncludeAllResourcesInput">shouldIncludeAllResourcesInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.resourceIds">resourceIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.shouldIncludeAllResources">shouldIncludeAllResources</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig">NotificationCenterComputePolicyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dynamicRules`<sup>Required</sup> <a name="dynamicRules" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.dynamicRules"></a>

```java
public NotificationCenterComputePolicyConfigDynamicRulesList getDynamicRules();
```

- *Type:* <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList">NotificationCenterComputePolicyConfigDynamicRulesList</a>

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.events"></a>

```java
public NotificationCenterComputePolicyConfigEventsList getEvents();
```

- *Type:* <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList">NotificationCenterComputePolicyConfigEventsList</a>

---

##### `dynamicRulesInput`<sup>Optional</sup> <a name="dynamicRulesInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.dynamicRulesInput"></a>

```java
public IResolvable|java.util.List<NotificationCenterComputePolicyConfigDynamicRules> getDynamicRulesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRules">NotificationCenterComputePolicyConfigDynamicRules</a>>

---

##### `eventsInput`<sup>Optional</sup> <a name="eventsInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.eventsInput"></a>

```java
public IResolvable|java.util.List<NotificationCenterComputePolicyConfigEvents> getEventsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEvents">NotificationCenterComputePolicyConfigEvents</a>>

---

##### `resourceIdsInput`<sup>Optional</sup> <a name="resourceIdsInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.resourceIdsInput"></a>

```java
public java.util.List<java.lang.String> getResourceIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `shouldIncludeAllResourcesInput`<sup>Optional</sup> <a name="shouldIncludeAllResourcesInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.shouldIncludeAllResourcesInput"></a>

```java
public java.lang.Boolean|IResolvable getShouldIncludeAllResourcesInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `resourceIds`<sup>Required</sup> <a name="resourceIds" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.resourceIds"></a>

```java
public java.util.List<java.lang.String> getResourceIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `shouldIncludeAllResources`<sup>Required</sup> <a name="shouldIncludeAllResources" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.shouldIncludeAllResources"></a>

```java
public java.lang.Boolean|IResolvable getShouldIncludeAllResources();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.internalValue"></a>

```java
public NotificationCenterComputePolicyConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig">NotificationCenterComputePolicyConfig</a>

---


### NotificationCenterRegisteredUsersList <a name="NotificationCenterRegisteredUsersList" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.notification_center.NotificationCenterRegisteredUsersList;

new NotificationCenterRegisteredUsersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.get"></a>

```java
public NotificationCenterRegisteredUsersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsers">NotificationCenterRegisteredUsers</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<NotificationCenterRegisteredUsers> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsers">NotificationCenterRegisteredUsers</a>>

---


### NotificationCenterRegisteredUsersOutputReference <a name="NotificationCenterRegisteredUsersOutputReference" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.notification_center.NotificationCenterRegisteredUsersOutputReference;

new NotificationCenterRegisteredUsersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.resetSubscriptionTypes">resetSubscriptionTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.resetUserEmail">resetUserEmail</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSubscriptionTypes` <a name="resetSubscriptionTypes" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.resetSubscriptionTypes"></a>

```java
public void resetSubscriptionTypes()
```

##### `resetUserEmail` <a name="resetUserEmail" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.resetUserEmail"></a>

```java
public void resetUserEmail()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.property.subscriptionTypesInput">subscriptionTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.property.userEmailInput">userEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.property.subscriptionTypes">subscriptionTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.property.userEmail">userEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsers">NotificationCenterRegisteredUsers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `subscriptionTypesInput`<sup>Optional</sup> <a name="subscriptionTypesInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.property.subscriptionTypesInput"></a>

```java
public java.util.List<java.lang.String> getSubscriptionTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `userEmailInput`<sup>Optional</sup> <a name="userEmailInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.property.userEmailInput"></a>

```java
public java.lang.String getUserEmailInput();
```

- *Type:* java.lang.String

---

##### `subscriptionTypes`<sup>Required</sup> <a name="subscriptionTypes" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.property.subscriptionTypes"></a>

```java
public java.util.List<java.lang.String> getSubscriptionTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `userEmail`<sup>Required</sup> <a name="userEmail" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.property.userEmail"></a>

```java
public java.lang.String getUserEmail();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.property.internalValue"></a>

```java
public IResolvable|NotificationCenterRegisteredUsers getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsers">NotificationCenterRegisteredUsers</a>

---


### NotificationCenterSubscriptionsList <a name="NotificationCenterSubscriptionsList" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.notification_center.NotificationCenterSubscriptionsList;

new NotificationCenterSubscriptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.get"></a>

```java
public NotificationCenterSubscriptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptions">NotificationCenterSubscriptions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<NotificationCenterSubscriptions> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptions">NotificationCenterSubscriptions</a>>

---


### NotificationCenterSubscriptionsOutputReference <a name="NotificationCenterSubscriptionsOutputReference" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.notification_center.NotificationCenterSubscriptionsOutputReference;

new NotificationCenterSubscriptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.resetEndpoint">resetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.resetSubscriptionType">resetSubscriptionType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndpoint` <a name="resetEndpoint" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.resetEndpoint"></a>

```java
public void resetEndpoint()
```

##### `resetSubscriptionType` <a name="resetSubscriptionType" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.resetSubscriptionType"></a>

```java
public void resetSubscriptionType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.property.endpointInput">endpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.property.subscriptionTypeInput">subscriptionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.property.subscriptionType">subscriptionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptions">NotificationCenterSubscriptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.property.endpointInput"></a>

```java
public java.lang.String getEndpointInput();
```

- *Type:* java.lang.String

---

##### `subscriptionTypeInput`<sup>Optional</sup> <a name="subscriptionTypeInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.property.subscriptionTypeInput"></a>

```java
public java.lang.String getSubscriptionTypeInput();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `subscriptionType`<sup>Required</sup> <a name="subscriptionType" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.property.subscriptionType"></a>

```java
public java.lang.String getSubscriptionType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|NotificationCenterSubscriptions getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptions">NotificationCenterSubscriptions</a>

---



